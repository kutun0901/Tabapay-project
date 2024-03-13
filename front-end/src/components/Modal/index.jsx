import React from 'react'
import './Modal.css'

const Modal = ({content, onClose}) => {
    return (
        <div className='modal-container'>
            <div className='modal-content'>
                <span className='close-button' onClick={onClose}>x</span>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Modal;
