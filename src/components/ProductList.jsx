"use client";
import React from 'react'
import ProductItem from './ProductItem'
import { motion } from 'framer-motion';

const ProductList = ({ title = undefined, type }) => {
    const animVariant = {
        hidden: { opacity: 0, x: type == 'left' ? -100 : 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: 'easeOut' },
        },
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animVariant}
            className='mx-auto container pt-10'
        >
            <h1 className='text-lg md:text-3xl font-bold mb-5'>{title}</h1>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
                {Array.from(Array(5).keys()).map((e) => {
                    return (
                        <ProductItem />
                    )
                })}
            </div>
        </motion.div>
    )
}

export default ProductList
