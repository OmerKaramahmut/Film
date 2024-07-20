import React from "react";
import Modal from "react-modal";
import './CSS/Modal.css'
import video2 from "../IMG/fragman.mp4";
Modal.setAppElement("#root");

const customStylesTwo = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    transition: "all ease in 2s",
  },
};
const ModalTwo = () => {
  let subtitleTwo;
  const [modalIsOpenTwo, setIsOpenTwo] = React.useState(false);

  function openModalTwo() {
    setIsOpenTwo(true);
  }

  function afterOpenModalTwo() {
    subtitleTwo.style.color = "#f00";
  }

  function closeModalTwo() {
    setIsOpenTwo(false);
  }
  return (
    <div>
      <button className="ModalClickButton" onClick={openModalTwo}>
        Fragman
      </button>
      <Modal
        isOpen={modalIsOpenTwo}
        onAfterOpen={afterOpenModalTwo}
        onRequestClose={closeModalTwo}
        style={customStylesTwo}
      >
        <form>
          <div className="ModalButton">
            <button className="btn-closee" onClick={closeModalTwo}>
              X
            </button>
          </div>
          <video src={video2} autoPlay loop controls></video>
        </form>
      </Modal>
    </div>
  );
};

export default ModalTwo;
