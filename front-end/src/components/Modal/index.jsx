import React, { useRef } from 'react'
import './Modal.css'

const Modal = ({content, onClose}) => {

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target){
            onClose();
        }
    }
    return (
        <div ref={modalRef} onClick={closeModal} className='modal-container'>
            <div className='modal-content'>
                <span className='close-button' onClick={onClose}>x</span>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Modal;
