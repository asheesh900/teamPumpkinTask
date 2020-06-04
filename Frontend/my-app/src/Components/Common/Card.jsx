import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");

const downloadImage = async (imageId, componentDidMount) => {
  await axios
    .post(`http://localhost:5000/download/image`, { id: imageId })
    .then((res) => alert("Image downloaded successfully"));
  componentDidMount();
};

export default function Card({ ele, componentDidMount }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Card */}

      <div className="card m-4" style={{ width: "18rem" }}>
        <img
          onClick={() => setModalIsOpen(true)}
          src={ele.image_url}
          className="card-img-top"
          alt={ele.image_name}
        />
        <div className="card-body">
          <h5 className="card-title">
            Contributor Name: {ele.contributor_name}
          </h5>
          <p>Image Name: {ele.image_name} </p>
          <p>Total Downloads: {ele.total_downloads} </p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "black",
          },
        }}
      >
        <h1>Download Image</h1>
        <div className="card m-4" style={{ width: "18rem" }}>
          <img
            onClick={() => setModalIsOpen(true)}
            src={ele.image_url}
            className="card-img-top"
            alt={ele.image_name}
          />

          <div className="card-body">
            <h5 className="card-title">
              Contributor Name: {ele.contributor_name}
            </h5>
            <p>Image Name: {ele.image_name} </p>
            <p>Total Downloads: {ele.total_downloads} </p>
            <button
              onClick={() => downloadImage(ele.id, componentDidMount)}
              className="btn btn-warning"
            >
              Download
            </button>
          </div>
        </div>
        <div>
          <button
            className="btn btn-danger"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
