import React from 'react'
import { FaPlus, FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product Added Successfully!")
  }

  return (
    <Link to={`/product/${product.id}`}>
      <div className='bg-white p-4 shadow rounded relative border hover:scale-105 duration-500'>
        <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mt-2 text-xs'>
          {product.rating}
        </div>
        <div className='absolute bottom-4 right-2 flex items-center justify-center w-32 md:w-8 h-9 bg-red-600 group text-white text-sm
        rounded-full md:hover:w-32 hover:bg-red-700 transition-all ' onClick={(e) => { handleAddToCart(e, product) }}>
          <span className='hidden sm:hidden md:block md:group-hover:hidden'><FaPlus /></span>
          <span className='md:hidden  md:group-hover:block cursor-pointer '>Add to cart</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
