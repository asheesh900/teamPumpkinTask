import React, { Component } from "react";
import {connect} from 'react-redux'
import {uploadImage} from '../../Redux/UploadImage/Action'

class UploadImage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             imageName: "",
             imageCategory: "",
             imageFile: "",
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        })
    }

    handleClick = () => {
        const data = new FormData();
        data.append("image_name", this.state.imageName);
        data.append("image_category", this.state.imageCategory);
        data.append("picture", this.state.imageFile);

        this.props.uploadImage(data, this.props.token);
        this.fileInput.value = "";
        this.setState({
            imageName: "",
            imageCategory: ""
        })
    }
    
  render() {

    return (
      <div className="container col-6">
        <h1>Upload Image</h1>
        <form>
          <div className="form-group">
            <label htmlFor="imageName">Image Name</label>
            <input onChange = {this.handleChange} name = "imageName" type="text" className="form-control" id="imageName" required/>
          </div>

          <div className="form-group">
            <label htmlFor="imageCategory">Category</label>
            <input onChange = {this.handleChange} name = "imageCategory" type="text" className="form-control" id="imageCategory" required/>
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Choose an Image:</label>
            <input
              onChange = {this.fileSelect}
              name = "imageFile"
              type="file"
              id="avatar"
              accept="image/png, image/jpeg, image/gif, image/jpg"
              ref={(ref) => (this.fileInput = ref)}
              required
            />
          </div>

          <button onClick = {this.handleClick} type="submit" className="btn btn-warning">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    token: state.authReducer.token,
})

const mapDispatchToProps = (dispatch) => ({
    uploadImage: (data, token) => dispatch(uploadImage(data, token)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);