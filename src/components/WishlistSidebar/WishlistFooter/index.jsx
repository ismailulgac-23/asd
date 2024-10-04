import { Icon } from '@iconify/react'
import React from 'react'

const WishlistFooter = () => {
   return (
      <div className='h-[100px] px-5 flex items-center justify-center border-t border-t-gray-200'>
         <button className='w-full h-[50px] bg-primary hover:bg-primary-hover transition-all px-5 text-white flex items-center justify-between'>
            <Icon icon="solar:trash-bin-2-outline" className='text-2xl' />
            <div className='flex items-center gap-2'>
               TEMİZLE
            </div>
            <div></div>
         </button>
      </div>
   )
}

export default WishlistFooter
