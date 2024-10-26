import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>

        <div>
          <h3 className='text-xl font-semibold'>e-Shop</h3>
          <p className='mt-4'>
            Your one-step for all your needs. Shop with use and experience the best online shopping experiences.
          </p>
        </div>

        <div className='flex flex-col items-start  md:items-center '>
          <h4 className='text-lg font-semibold '>Quick Links</h4>
          <ul className='mt-4 space-y-2 list-disc ml-8 md:ml-0'>
            <li>
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to="/shop" className='hover:underline'>Shop</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:underline'>Contact</Link>
            </li>
            <li>
              <Link to="/about" className='hover:underline'>About</Link>
            </li>
          </ul>
        </div>

        <div className=''>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href="" className='hover:text-gray-400 text-2xl'><FaFacebook /></a>
            <a href="" className='hover:text-gray-400 text-2xl'><FaTwitter /></a>
            <a href="" className='hover:text-gray-400 text-2xl'><FaInstagram /></a>
            <a href="" className='hover:text-gray-400 text-2xl'><FaYoutube /></a>
          </div>
          <form className='flex items-center justify-center mt-8 gap-2'>
            <input type="email" placeholder='Enter Email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none' />
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600'>Subscribe</button>
          </form>
        </div>

        <div className=''>
          <div className='container border-t-2 border-gray-800'>
            <p className='mt-4'>&copy; 2024 e-shop All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
