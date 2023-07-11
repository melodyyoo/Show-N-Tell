import React, { useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState(null);
  // callback function that will be called when modal is closing
  const [onModalClose, setOnModalClose] = useState(null);
  const [title, setTitle] = useState(null)

  const closeModal = () => {
    setModalContent(null); // clear the modal contents
    setTitle(null)
    // If callback function is truthy, call the callback function and reset it
    // to null:
    if (typeof onModalClose === "function") {
      setOnModalClose(null);
      onModalClose();
    }
  };


  const contextValue = {
    modalRef, // reference to modal div
    modalContent, // React component to render inside modal
    title,
    setModalContent, // function to set the React component to render inside modal
    setOnModalClose, // function to set the callback function called when modal is closing
    setTitle,
    closeModal // function to close the modal
  };

  return (
    <>
      <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}


export function Modal() {
  const { modalRef, modalContent, closeModal, title} = useContext(ModalContext);
  // If there is no div referenced by the modalRef or modalContent is not a
  // truthy value, render nothing:
  if (!modalRef || !modalRef.current || !modalContent) return null;

  // Render the following component to the div referenced by the modalRef
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={closeModal} />
      <div id="modal-content">
        <div className="modal-header">
          <p className="modal-header-title" >{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            width="16px"
            height="16px"
            className="x-button"
            onClick={closeModal}
          >
            <path d="m6 6 20 20M26 6 6 26"></path>
          </svg>
        </div>
        {modalContent}
      </div>
    </div>,
    modalRef.current
  );
}

export const useModal = () => useContext(ModalContext);
