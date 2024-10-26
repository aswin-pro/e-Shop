import React from 'react'

const Contact = () => {
    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24 space-y-8'>
            <h1 className='text-2xl font-semibold'>Contact Us</h1>
            <div className=''>
                <p className='text-xl text-gray-600 font-semibold mb-2'>We’d Love to Hear from You!</p>
                At e-Shop, our customers are our top priority. Whether you have questions about a product, need assistance with an order, or simply want to share feedback, we’re here to help. Our team is dedicated to ensuring you have the best possible shopping experience, and we’re always just a message away.
            </div>

            <div>
                <p className='text-xl text-gray-600 font-semibold'>Get in Touch</p>
                <p className='text-xl text-gray-600 font-semibold'>Customer Support:</p>
                <p className='mt-2'>For any questions or assistance, feel free to reach out to our customer support team. We’re here to answer your inquiries and provide any help you need.</p>
                <ul className='list-disc ml-8 space-y-4 mt-2'>
                    <li>Email: support@e-shop.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Business Hours: Monday – Friday, 9:00 AM – 5:00 PM (EST)</li>
                </ul>
            </div>

            <div>
                <p className='text-xl text-gray-600 font-semibold mb-2'>Follow Us:</p>
                Stay updated on the latest products, promotions, and e-Shop news! Follow us on social media:
                <ul className='list-disc ml-8 space-y-4 mt-2'>
                    <li>Facebook: facebook.com/eshop</li>
                    <li>Instagram: @eshop_official</li>
                    <li>Twitter: @eshop</li>
                </ul>
            </div>

            <div>
                <p className='text-xl text-gray-600 font-semibold mb-2'>Frequently Asked Questions (FAQs)</p>
                You can also check out our FAQ page for quick answers to common questions.
            </div>
            <div>
                Thank you for choosing e-Shop! We look forward to assisting you and making your shopping experience with us as smooth and enjoyable as possible.
            </div>
        </div>
    )
}

export default Contact
