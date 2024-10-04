import { Icon } from '@iconify/react'
import React from 'react'

const SidebarProduct = () => {
   return (
      <div className='p-5 w-full flex items-center gap-2.5 border-b border-b-gray-200 last:border-b-0'>
         <img src='https://htmldemo.net/bege/bege/images/product/single/product7.jpg' className='size-20 border border-gray-100' />
         <div className='flex flex-col items-start'>
            <h1 className='font-medium text-xs transition-all cursor-pointer hover:text-primary'>LCD 1'4 YENİ NESİL TEKNOLOJİ - 24 INCH EKRAN TV</h1>
            <div className='flex items-end gap-1 cursor-pointer'>
               <h3 className='text-sm font-medium'>₺999,99</h3>
               <h3 className='text-xs text-gray-500'>
                  <del>₺1299,99</del>
               </h3>
            </div>

            <div className='flex items-center w-max gap-5 mt-2'>
               <div className='flex items-center gap-2 border border-gray-200 py-2'>
                  <button className='pl-2'>
                     <Icon icon="ic:baseline-minus" />
                  </button>
                  <input disabled type='text' value={1} className='w-[23px] text-xs text-center' />
                  <button className='pr-2'>
                     <Icon icon="ic:baseline-plus" />
                  </button>
               </div>

               <span className='select-none text-gray-400 text-sm hover:text-black transition-all hover:decoration-black hover:underline cursor-pointer'>Ürünü Kaldır</span>
            </div>
         </div>
      </div>
   )
}

export default SidebarProduct
