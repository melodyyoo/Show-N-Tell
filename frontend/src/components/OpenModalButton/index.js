import React from "react";
import { useModal } from "../../context/Modal";

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  title,
  style={color:"white", fontSize: "15px", fontFamily: "'Open Sans', sans-serif", cursor:'pointer', marginRight:"20px"}
}) {
  const { setModalContent, setOnModalClose , setTitle} = useModal();

  const onClick = () => {
    if (typeof onButtonClick === "function") onButtonClick();
    if (typeof onModalClose === "function") setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    setTitle(title)
  };

  return <p style={style} onClick={onClick}>{buttonText}</p>;
}

export default OpenModalButton;
