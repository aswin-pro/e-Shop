import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({ setOrder }) => {
    const [billingToggle, setbillingToggle] = useState(false)
    const [shippingToggle, setshippingToggle] = useState(false)
    const [paymentToggle, setpaymentToggle] = useState(false)

    const [paymentMethod, setpaymentMethod] = useState("cod")
    const [shippingInfo, setShippingInfo] = useState({
        customerName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',      
    })

    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()

    function handleOrder() {
        const isFormValid = Object.values(shippingInfo).every(field => field.trim() !== '')

        if (!isFormValid) {
            alert("Please fill out all required fields.")
            return
        }
        const newOrder = {
            products: cart.products,
            orderId: "fbwa643kkjd97894",
            shippingInformation: shippingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)     
        navigate('/order-confirmation')
    }

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between md:space-x-10 mt-8'>

                <div className='md:w-2/3'>
                    {/* Billing Information */}
                    <div className='border p-4 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setbillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold '>Billing Information</h3>
                            {
                                billingToggle ? <FaAngleDown /> : <FaAngleUp />
                            }

                        </div>

                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700 mt-4'>Name</label>
                                <input type="text" placeholder='Enter Name' className='w-full px-3 py-2 border' required onChange={(e) => setShippingInfo({ ...shippingInfo, customerName: e.target.value })} />
                            </div>


                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border' required onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })} />
                            </div>


                            <div>
                                <label className='block text-gray-700'>Phone</label>
                                <input type="text" placeholder='Enter Number' className='w-full px-3 py-2 border' required onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })} />
                            </div>
                        </div>
                    </div>

                    {/* shipping information */}
                    <div className='border p-4 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setshippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold '>Shipping Information</h3>
                            {
                                shippingToggle ? <FaAngleDown /> : <FaAngleUp />
                            }

                        </div>

                        <div className={`space-y-4  ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700 mt-4'>Address</label>
                                <input type="text" placeholder='Enter Address' className='w-full px-3 py-2 border' required onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })} />
                            </div>


                            <div>
                                <label className='block text-gray-700'>City</label>
                                <input type="email" placeholder='Enter City Name' className='w-full px-3 py-2 border' required onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })} />
                            </div>


                            <div>
                                <label className='block text-gray-700'>Zip Code</label>
                                <input type="text" placeholder='Enter Zip code' className='w-full px-3 py-2 border' required onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })} />
                            </div>
                        </div>
                    </div>

                    {/* payment method */}
                    <div className='border p-4 mb-6 '>
                        <div className='flex items-center justify-between' onClick={() => setpaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold '>Payment Method</h3>
                            {
                                paymentToggle ? <FaAngleDown /> : <FaAngleUp />
                            }

                        </div>

                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2 mt-4'>
                                <input type="radio" name="payment" onChange={() => setpaymentMethod("cod")} />
                                <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input type="radio" name="payment" onChange={() => setpaymentMethod("dc")} />
                                <label className='block text-gray-700 ml-2'>Debit / Credit</label>
                            </div>
                            {paymentMethod === "dc" && (
                                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>Card Information</h3>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                        <input type="text" placeholder='XXXX XXXX XXXX XXXX' className='border p-2 w-full rounded' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="">Card Holder Name</label>
                                        <input type="text" placeholder='Enter Card Holder Name' className='border p-2 w-full rounded' />
                                    </div>
                                    <div className='flex justify-between  mb-4'>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
                                            <input type="text" placeholder='00/00' className='border p-2 w-full rounded' />
                                        </div>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                            <input type="text" placeholder='Enter CVV Number' className='border p-2 w-full rounded' />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Order Summery */}
                <div className='md:w-1/3 h-fit bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-lg font-semibold mb-4'>Order Summery</h3>
                    <div className='space-y-4'>
                        {cart.products.map(product => {
                            return (
                                <div key={product.id} className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                        <div className='ml-4'>
                                            <h4 className='text-md font-semibold'>{product.name}</h4>
                                            <p className='text-gray-600'>
                                                ${product.price} x {product.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price:</span>
                            <span className='font-semibold'>${(cart.totalPrice.toFixed(2))}</span>
                        </div>
                    </div>
                    <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800' onClick={handleOrder}>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout

