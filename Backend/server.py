from flask import Flask, request, flash, redirect, url_for, send_from_directory
from flask_mysqldb import MySQL
from werkzeug.utils import secure_filename
import json
import os
import base64
import hashlib
import jwt

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '@ps123'
app.config['MYSQL_DB'] = 'team_pumpkin_image_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

UPLOAD_FOLDER = './data'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {'gif', 'png', 'jpg', 'jpeg'}

# Function to check whether the uploaded file format is allowed or not
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Upload an image and save its information to the database
@app.route('/uploader', methods = ['POST'])
def upload_file():
   if request.method == 'POST':
        decoded_data = token_decoder()
        print(decoded_data)

        if 'picture' not in request.files:
            flash('No file part')
            return redirect(request.url)


        file = request.files['picture']

        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            location = "../Frontend/my-app/public/img/" + file.filename
            img_url = "/img/" + file.filename
            file.save(location)
        ask = request.json
        image_name = ask['image_name']
        image_category = ask['image_category']
        contributor_id = decoded_data['id']


        cursor = mysql.connection.cursor()
        cursor.execute(
            # """UPDATE users SET avatar = %s
            #  WHERE id = %s""", (str(img_url), decoded_data["id"])
            """INSERT INTO images 
            (image_name, image_url, image_category, contributor_id) VALUES
             (%s, %s, %s, %s)""", (image_name, img_url, image_category, contributor_id)
        )
        mysql.connection.commit()
        cursor.close()
        return {"id": decoded_data["id"], "img_url": img_url}

# Authentication

@app.route('/auth/signup', methods = ['POST'])
def signup():
    ask = request.json
    name = ask['name']
    username = ask['username']
    email = ask['email']
    password = ask['password']
    user_type = ask['user_type']

    salt = generate_salt()
    salted_password = salt + password
    hashed_password = hash_cycle(salted_password)

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (name, username, email, salt, hashed_password, user_type)
        VALUES (%s, %s, %s, %s, %s, %s)""",
        ((name), (username), (email), (salt), (hashed_password), (user_type))
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "Signup Successful"}

@app.route('/auth/login', methods = ['POST'])
def login():
    ask = request.json
    email = ask['email']
    password = ask['password']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM users WHERE
         email = %s""", (str(email),)
    )
    result = cursor.fetchall()
    cursor.close()
    user_data = list()
    for item in result:
        user_data.append(item)
    if len(user_data) is not 0:
        for user in user_data:
            if user["hashed_password"] == hash_cycle(user["salt"] + password):
                encode_data = jwt.encode({"id": user["id"]}, 'masai', algorithm='HS256')
                return json.dumps({"message": "Signin Successful!", "username": user["username"], "user_type": user["user_type"], "token": str(encode_data)})
            else:
                return {"message": "Wrong Password"}
    return {"message": "Please make sure you are a registered user."}

def generate_salt():
    salt = os.urandom(16)
    # print(salt.encode('base-64'))
    return str(base64.b64encode(salt))

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    # print(hash.hexdigest())
    return hash.hexdigest()

def hash_cycle(string):
    for i in range(10):
        string = md5_hash(string)
    return string

def token_decoder():
    auth_header = request.headers.get("Authorization")
    token_encoded = auth_header.split(" ")[1]
    decode_data = jwt.decode(token_encoded, "masai", algorithm = ["HS256"])
    return decode_data


