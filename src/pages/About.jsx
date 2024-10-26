import React from 'react'

const About = () => {
    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24 space-y-8'>
            <h1 className='text-2xl font-semibold'>About Us</h1>

            <div className=''>
                <p className='text-xl text-gray-600 font-semibold mb-2'>Welcome to e-Shop!</p>
                At e-Shop, we believe that shopping should be easy, enjoyable, and accessible to everyone. Our platform is designed to bring you a diverse selection of high-quality products, from fashion and electronics to home essentials and everything in between.
            </div>
            <div className=''>
                Founded with a passion for excellence and customer satisfaction, e-Shop is committed to delivering the best online shopping experience. We work closely with trusted brands and suppliers to ensure that every product on our site meets our standards for quality, value, and style.
            </div>

            <div className=''>
                <p className='text-xl text-gray-600 font-semibold mb-2'>Why Choose e-Shop?</p>
                <ul className='list-disc space-y-4 ml-8'>
                    <li><strong>Quality You Can Trust:</strong> We prioritize quality in everything we offer, ensuring that our products stand up to the expectations of our valued customers. We prioritize quality in everything we offer, ensuring that our products stand up to the expectations of our valued customers.</li>
                    <li><strong>Exceptional Customer Service:</strong> Our customer support team is here to help with any questions or concerns you might have—before, during, and after your purchase.</li>
                    <li><strong>Secure and Convenient Shopping:</strong> With secure payment methods, easy navigation, and a user-friendly checkout process, we aim to make your shopping experience smooth and hassle-free.</li>
                    <li><strong>Continuous Innovation:</strong> We are always expanding our product range and enhancing our platform to stay up-to-date with the latest trends and technologies.</li>
                </ul>
            </div>

            <div className=''>
                <p className='text-xl text-gray-600 font-semibold mb-2'>Our Mission</p>
                Our mission at e-Shop is simple: to create a seamless and enjoyable shopping journey for all our customers. We aim to be your go-to destination for all your needs by offering an extensive product catalog, unbeatable deals, and a shopping experience you can trust.
            </div>
            <div className=''>
                Thank you for choosing e-Shop. We look forward to serving you and making your shopping experience as enjoyable as possible.
            </div>
        </div>
    )
}

export default About
