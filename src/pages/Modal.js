import React from "react";
import "./Modal.css"; // You can add custom CSS here for modal styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Only render if modal is open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button">Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
