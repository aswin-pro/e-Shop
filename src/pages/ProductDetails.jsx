import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'


const ProductDetails = () => {
    const { id } = useParams()
    const products = useSelector(state => state.product.products)
    const [product, setProduct] = useState()

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        alert("Product Added Successfully!")
    }

    useEffect(() => {
        const newProduct = products.find(product => product.id === parseInt(id))
        setProduct(newProduct)
    }, [id, products])


    if (!product) return <div className='flex justify-center items-center mt-52 mb-52'>Loading...</div>

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row gap-10 gap-x-16'>
                {/* Product Image */}
                <div className='md:w-1/2 py-4 shadow-md border md:px-8 h-96 flex justify-center'>
                    <img src={product.image} alt={product.name} className='h-full' />
                </div>

                {/* Product information */}
                <div className='md:w-1/2 p-2 shandow-md border  md:p-1 flex flex-col items-center gap-y-2'>
                    <h2 className='text-3xl font-semibold text-gray-800 mb-4 mt-4'>{product.name}</h2>
                    <p className='text-xl font-semibold text-gray-800 mb-4'>${product.price}</p>
                    <p>{product.rating}</p>

                    <div className='flex items-center mb-4 gap-x-2'>
                        <button className='bg-red-600 p-2 text-white' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                    <div className='flex flex-col gap-y-4 mt-4'>
                        <p className='flex items-center'><FaCarSide className='mr-1' /> Delivery & Return</p>
                        <p className='flex items-center'><FaQuestion className='mr-1' />Ask a Question</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <h3 className='text-xl font-bold mb-2'>Product Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatem nemo molestias ullam nam optio delectus, ex est veniam, tempora sunt. Voluptatibus debitis cum, deleniti totam laboriosam illum eos officia!</p>
            </div>
        </div>
    )
}

export default ProductDetails
