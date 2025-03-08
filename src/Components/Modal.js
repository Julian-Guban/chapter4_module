import React from 'react'

function Modal({ message, subtitle, icon, state, onClose, children }) {
    if (!state) return null; // Don't render if state is false
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          {icon && <span className="modal-icon">{icon}</span>}
          <h2>{message}</h2>
          {subtitle && <p>{subtitle}</p>}
          <div className="modal-body">{children}</div>
          <button className="modal-close" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    );
  }  

export default Modal