import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import './CSS/Modal.css'
import video1 from "../UI/fragman2.mp4";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    width: "auto",
    border: "none",
    background: "none",
    transition: "ease-in-out 0.3s",
  
    }
  }

const ModalOne = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="modelSlow">
      <button className="ModalClickButton" onClick={openModal}>
        Fragman
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form>
          <div className="ModalButton">
            <button className="btn-closee" onClick={closeModal}>
              X
            </button>
          </div>
          <video className="videoOne"  src={video1} autoPlay loop controls width={500}></video>
        </form>
      </Modal>
    </div>
  );
};

export default ModalOne;
