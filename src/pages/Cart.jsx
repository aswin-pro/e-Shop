import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EmptyCart from '../assets/Images/emptycart.png'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const cart = useSelector(state => state.cart)
    // const [address, setAddress] = useState('Main street, 0012')
    // const [isModelOpen, setisModelOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            {cart.products.length > 0 ?
                <div>
                    <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
                    <div className=' flex flex-col md:flex-row gap-10 justify-between mt-8'>
                        <div className=''>
                            {cart.products.map((product) => {
                                return (
                                    <div key={product.id} className='md:w-[600px] flex gap-6 border p-6 mb-6 rounded-lg '>
                                        <div className=''>
                                            <img src={product.image} alt={product.name} className='w-24 h-24 object-contain' />
                                            <div className='flex  space-x-2 px-2 border mt-2'>
                                                <button className='px-2 border-r text-xl' onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                                                <p className='text-xl'>{product.quantity}</p>
                                                <button className='px-2 border-l text-xl' onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                                            </div>
                                        </div>
                                        <div className='space-y-2 flex-1'>
                                            <div>
                                                <p className='text-sm'>Product Name</p>
                                                <h1 className='font-semibold'>{product.name}</h1>
                                            </div>
                                            <div>
                                                <p className='text-sm'>Price</p>
                                                <h1 className='font-bold'>${(product.price * product.quantity).toFixed(2)}</h1>
                                            </div>
                                            <div className=''>
                                                <button className='border p-2 flex items-center gap-2 text-red-500 hover:text-red-700'
                                                    onClick={() => dispatch(removeFromCart(product.id))}
                                                >
                                                    Remove <FaTrashAlt />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='w-full h-fit bg-white p-4 rounded-lg shadow-md border mt-4 md:mt-0'>
                            <h3 className='text-lg font-semibold mb-3'>CART TOTAL</h3>
                            <div className='flex justify-between mb-3 border-b pb-2'>
                                <span>Total Items:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            {/* <div className='mb-3 border-b pb-2'>
                                <p className='text-sm'>Shipping:</p>
                                <p className='ml-2 text-xs'>Shipping to:</p>
                                <span className='text-sm font-bold'>{address}</span>
                                <button className='text-blue-500 hover:underline mt-1 ml-2 text-xs' onClick={() => setisModelOpen(true)}>Change Address</button>
                            </div> */}
                            <div className='flex justify-between mb-3'>
                                <span>Total Price:</span>
                                <span>${(cart.totalPrice).toFixed(2)}</span>
                            </div>
                            <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800 '
                                onClick={() => navigate('/checkout')}
                            >
                                Proceed to Checkout
                            </button>
                        </div>

                    </div>
                    {/* <Modal
                        isModelOpen={isModelOpen}
                        setisModelOpen={setisModelOpen}
                    >
                        <ChangeAddress setAddress={setAddress} setisModelOpen={setisModelOpen} />
                    </Modal> */}

                </div>
                :
                <div className='flex justify-center '>
                    <img src={EmptyCart} alt="Empty cart" className='h-96' />
                </div>
            }
        </div>
    )
}

export default Cart
