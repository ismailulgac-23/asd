import { toggleCartModal } from '$/store/modal'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const CartEmpty = () => {
 return (
  <div className='flex items-center flex-col gap-2 justify-center w-full h-full'>
   <h1 className='font-medium'>Sepetiniz boş!</h1>
   <Link onClick={()=>toggleCartModal(false)} href="/explore" className='bg-primary rounded-md flex items-center justify-center gap-1.5 px-3 py-1.5'>
    <Icon icon="material-symbols:explore-outline" className='text-lg text-white' />
    <h1 className='text-sm text-white'>Ürünleri Keşfet</h1>
   </Link>
  </div>
 )
}

export default CartEmpty
