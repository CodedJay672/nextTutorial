import React, { useEffect } from 'react';
import './Modal.css';

import { MdClose } from "react-icons/md";

const Modal = ({ user, closeModal }) => {
  return (
    <div className={`users__container_modal-details`}>
      <div className='users__container_modal-details_header'>
        <h3>User Details</h3>
        <button onClick={closeModal}>
          <MdClose/>
        </button>
      </div>
      <div className='users__container_modal-details_body'>
        <h4>{user?.name}</h4>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
        <p>{user?.website}</p>
      </div>
    </div>
  )
}

export default Modal;
