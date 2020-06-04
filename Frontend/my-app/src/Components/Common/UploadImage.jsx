import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadImage } from "../../Redux/UploadImage/Action";
import ContributorSidebar from "./ContributorSidebar";

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.imageNameRef = React.createRef();
    this.imageCategoryRef = React.createRef();

    this.state = {
      imageName: "",
      imageCategory: "",
      imageFile: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  fileSelect = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };

  handleClick = () => {
    const data = new FormData();
    data.append("image_name", this.state.imageName);
    data.append("image_category", this.state.imageCategory);
    data.append("picture", this.state.imageFile);

    this.props.uploadImage(data, this.props.token);

    this.imageNameRef.current.value = "";
    this.imageCategoryRef.current.value = "";
    this.fileInput.value = "";
  };

  render() {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-3 mr-2 bg-info  text-light">
            <ContributorSidebar className="" />
          </div>
          <div className="col-8 border border-dark">
            <div className="container col-6 my-4">
              <h1>Upload Image</h1>
              <form>
                <div className="form-group mt-4">
                  <label htmlFor="imageName">Image Name</label>
                  <input
                    onChange={this.handleChange}
                    name="imageName"
                    type="text"
                    className="form-control"
                    id="imageName"
                    ref={this.imageNameRef}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="imageCategory">Category</label>
                  <input
                    onChange={this.handleChange}
                    name="imageCategory"
                    type="text"
                    className="form-control"
                    id="imageCategory"
                    ref={this.imageCategoryRef}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="avatar">Choose an Image:</label>
                  <input
                    onChange={this.fileSelect}
                    name="imageFile"
                    type="file"
                    id="avatar"
                    accept="image/png, image/jpeg, image/gif, image/jpg"
                    ref={(ref) => (this.fileInput = ref)}
                    required
                  />
                </div>

                <button
                  onClick={this.handleClick}
                  type="submit"
                  className="btn btn-warning"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  uploadImage: (data, token) => dispatch(uploadImage(data, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
