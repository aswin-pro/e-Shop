import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleClear } from '../redux/cartSlice'

const OrderConfirmation = ({ order }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function clearCart() {
        navigate('/')
        dispatch(handleClear())
    }

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <h2 className='text-2xl font-semibold mb-4'>Thanks for your order!</h2>
            <p>Your Order has been placed successfully you will recieve and email confirmation shortly : )</p>
            <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
                <h3 className='text-lg font-semibold mb-2'>Order Summery</h3>
                <p>Order Id : {order.orderId}</p>
                <div className='mt-4'>
                    <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>
                    <p>Name : {order.shippingInformation.customerName}</p>
                    <p>Email : {order.shippingInformation.email}</p>
                    <p>Address : {order.shippingInformation.address}</p>
                    <p>City : {order.shippingInformation.city}</p>
                    <p>Zip Code : {order.shippingInformation.zip}</p>
                    <p>Phone : {order.shippingInformation.phone}</p>
                </div>
                <div className='mt-4'>
                    <h3 className='text-md font-semibold mb-2'>Items Ordered</h3>
                    {order.products.map(product => {
                        return (
                            <div key={product.id} className='flex justify-between mt-2'>
                                <p>{product.name} (x{product.quantity})</p>
                                <p className='font-semibold'>${product.price * product.quantity}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='mt-4 flex justify-between'>
                    <span>Total Price : </span>
                    <span className='font-semibold'>${order.totalPrice.toFixed(2)}</span>
                </div>
                <div className='mt-6'>
                    <button className='bg-green-500 text-white py-2 px-2 hover:bg-green-600'>Order tracking</button>
                    <button className='ml-4 bg-red-600 text-white py-2 px-2 hover:bg-red-800' onClick={clearCart}>Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}
// ()=>{navigate('/') dispatch(handleClear)}
export default OrderConfirmation
