import React from 'react';
import SingleProduct from '../lib/SingleProduct';
import Navbar from "../lib/Navbar";
import Footer from "../lib/Footer";
import { motion } from "framer-motion"

const products = [
    { name: 'T-Shirt', price: '$10', image: './s0.jpg', rating: 5 },
    { name: 'T-Shirt', price: '$20', image: './s1.jpg', rating: 3 },
    { name: 'Hoodie', price: '$130', image: './s2.png', rating: 4 },
    { name: 'Hoodie', price: '$130', image: './s3.png', rating: 5 },
    { name: 'Hoodie', price: '$130', image: './s4.png', rating: 4 },
    { name: 'Hoodie', price: '$130', image: './s39.jpg', rating: 5 },
    { name: 'Hoodie', price: '$130', image: './s42.jpg', rating: 5 },
    { name: 'Hoodie', price: '$130', image: './s43.avif', rating: 5 },
    { name: 'Hoodie', price: '$130', image: './s44.avif', rating: 3 },
    { name: 'Bag', price: '$65', image: './s5.png', rating: 5 },
    { name: 'Bag', price: '$130', image: './s33.jpg', rating: 5 },
    { name: 'Bag', price: '$200', image: './s34.jpg', rating: 3 },
    { name: 'Bag', price: '$165', image: './s36.jpg', rating: 5 },
    { name: 'Bag', price: '$165', image: './s37.jpg', rating: 5 },
    { name: 'Bag', price: '$165', image: './s38.jpg', rating: 5 },
    { name: 'Bag', price: '$105', image: './s40.jpg', rating: 3 },
    { name: 'Bag', price: '$90', image: './s41.jpg', rating: 4 },
    { name: 'Shirt', price: '$105', image: './s6.png', rating: 5 },
    { name: 'Shoe', price: '$134', image: './s7.png', rating: 5 },
    { name: 'Shoe', price: '$134', image: './s14.jpg', rating: 5 },
    { name: 'Shoe', price: '$104', image: './s15.jpg', rating: 5 },
    { name: 'Shoe', price: '$100', image: './s16.jpg', rating: 5 },
    { name: 'Glass', price: '$60', image: './s8.jpg', rating: 3 },
    { name: 'Glass', price: '$60', image: './s12.jpg', rating: 5 },
    { name: 'Glass', price: '$60', image: './s13.jpg', rating: 4 },
    { name: 'Glass', price: '$60', image: './s17.jpg', rating: 4 },
    { name: 'Glass', price: '$60', image: './s18.jpg', rating: 5 },
    { name: 'Glass', price: '$60', image: './s19.jpg', rating: 5 },
    { name: 'Glass', price: '$60', image: './s20.jpg', rating: 3 },
    { name: 'Wristwatch', price: '$80', image: './s10.png', rating: 5 },
    { name: 'Wristwatch', price: '$80', image: './s11.png', rating: 5 },
    { name: 'Wristwatch', price: '$80', image: './s21.jpg', rating: 5 },
    { name: 'Wristwatch', price: '$80', image: './s22.jpg', rating: 5 },
    { name: 'Wristwatch', price: '$80', image: './s23.jpg', rating: 4 },
    { name: 'Wristwatch', price: '$80', image: './s24.jpg', rating: 4 },
    { name: 'Wristwatch', price: '$80', image: './s25.jpg', rating: 3 },
    { name: 'Wristwatch', price: '$80', image: './s26.jpg', rating: 5 },
    { name: 'Wristwatch', price: '$80', image: './s28.jpg', rating: 5 },
    { name: 'Wristwatch', price: '$80', image: './s29.jpg', rating: 4 },
    { name: 'Jeans', price: '$280', image: './s27.jpg', rating: 5 },
    { name: 'Jeans', price: '$200', image: './s30.jpg', rating: 5 },
    { name: 'Jeans', price: '$200', image: './s31.jpg', rating: 3 },
];

const Product = () => {
    return (
        <div className='w-full h-auto'>
            <Navbar />
            <motion.h2
                className='text-3xl sm:text-4xl text-white mt-20 mb-14 sm:mt-24 sm:mb-16 md:mt-28 md:mb-20 px-3 text-center'
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                id='demotext'
            >
                Product's
            </motion.h2>
            <div
                className='px-3 flex flex-wrap gap-5 items-center justify-center mb-32'
            >
                {products.map((data, index) => (
                    <SingleProduct key={index} data={data} details={true} index={index} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Product