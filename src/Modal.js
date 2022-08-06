import React from 'react'
import { useGlobalContext} from './context'

import { FaTimes } from 'react-icons/fa'
const Modal = () => {

  const {isModalOpen,closeModal} = useGlobalContext();



  return <div className={`${isModalOpen?'modal-overlay show-modal':'model-overlay'}`}> 
  <div className='modal-container'>
   <h2>modal content</h2>
   <button className='close-modal-btn' onClick={closeModal}>
    <FaTimes/>
   </button>
  </div>
  </div>
}

export default Modal
