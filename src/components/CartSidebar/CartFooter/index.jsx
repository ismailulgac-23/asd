import { Icon } from '@iconify/react'
import React from 'react'

const CartFooter = () => {
   return (
      <div className='h-[100px] px-5 flex items-center justify-center border-t border-t-gray-200'>
         <button className='w-full h-[50px] bg-primary hover:bg-primary-hover transition-all px-5 text-white flex items-center justify-between'>
            <Icon icon="mingcute:lock-line" className='text-2xl' />
            <div className='flex items-center gap-2'>
               ÖDEME YAP
               <Icon icon="ic:round-square" style={{fontSize: 8}} />
               ₺24.999,244
            </div>
            <div></div>
         </button>
      </div>
   )
}

export default CartFooter
