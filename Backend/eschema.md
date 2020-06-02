#### users Table

````sql
CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, name VARCHAR (255) NOT NULL,  email VARCHAR (255) NOT NULL UNIQUE, username VARCHAR (255) NOT NULL, salt VARCHAR (255) NOT NULL, hashed_password VARCHAR (255) NOT NULL, user_type VARCHAR (25) NOT NULL, PRIMARY KEY (id));
````

#### images Table

````sql
CREATE TABLE images (id INT NOT NULL AUTO_INCREMENT, image_name VARCHAR (255) NOT NULL, image_url VARCHAR (255) NOT NULL, image_category VARCHAR (255) NOT NULL, contributor_id INT, total_downloads INT NOT NULL DEFAULT 0, PRIMARY KEY (id), FOREIGN KEY (contributor_id) REFERENCES users(id));
````