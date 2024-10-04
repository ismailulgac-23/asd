import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const ProductItem = () => {
    return (
        <Link href="/products/detail">
            <div className='border border-gray-200 relative rounded-md'>
                <div className='absolute top-2 md:top-5 right-2 md:right-5 bg-primary px-2 md:px-3 py-1 md:py-1.5 rounded-md'>
                    <h1 className='text-white text-xs md:text-sm font-bold'>50% İndirim</h1>
                </div>
                <img src='https://htmldemo.net/bege/bege/images/product/1.jpg' className='rounded-md rounded-bl-none rounded-br-none border-b border-b-gray-200' />
                <div className='p-2 bg-white rounded-bl-md rounded-br-md'>
                    <div className='flex items-center gap-2 mb-1'>
                        <img src='https://turcogurme.com/public/zeytin.svg' className='w-5 h-5' />
                        <h1 className='text-gray-500 text-xs md:text-sm'>Halhalı Yeşil Zeytin</h1>
                    </div>

                    <h1 className='hover:text-primary font-medium text-sm md:text-base transition-all cursor-pointer'>5 Litre - El Kırması, Yeşil Zeytin</h1>

                    <div className='flex items-center gap-1'>
                        <h1 className='text-base md:text-lg text-primary font-bold'>399,99₺</h1>
                        <h3 className='text-xs md:text-sm text-red-500 font-medium'>499,99₺</h3>
                    </div>


                </div>
            </div>
        </Link>
    )
}

export default ProductItem
