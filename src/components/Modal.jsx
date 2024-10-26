import React from 'react'
import Cart from "../pages/Cart"
import ChangeAddress from './ChangeAddress';

const Modal = ({ isModelOpen, setisModelOpen, children }) => {

  if (!isModelOpen) return null;
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 '>
      <div className='bg-white rounded-lg shandow-lg p-6 md:w-full  max-w-md'>
        <button className='absolute top-4 right-4 text-gray-300 text-3xl' onClick={() => setisModelOpen(false)} >&times;</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
