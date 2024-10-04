import { Icon } from '@iconify/react'
import React, { useRef } from 'react'
import CategoryDropdown from './CategoryDropdown'
import { toggleCategoriesMenu } from '$/store/modal'
import useOutsideClick from '$/hooks/useOutsideClick'

const SearchBar = () => {
   const categoryRef = useRef(null);

   const onClickOutside = () => {
      toggleCategoriesMenu(false)
   };

   useOutsideClick(categoryRef, onClickOutside);
   return (
      <div className='rounded-md border border-primary items-center h-[45px] max-w-xl lg:max-w-3xl hidden lg:flex w-full'>
         <div className='relative rounded-tl-md rounded-bl-md h-full'>
            <button onClick={() => toggleCategoriesMenu()} className='rounded-tl-md rounded-bl-md bg-primary flex-shrink-0 h-full flex items-center justify-center px-4 gap-3 w-[200px]'>
               <h1 className='text-white'>Tüm Kategoriler</h1>
               <Icon icon="bi:chevron-down" className='text-white' />
            </button>
            <CategoryDropdown categoryRef={categoryRef} />
         </div>
         <div className='w-full flex items-center justify-between h-full pr-2'>
            <input className='pl-4 pr-2 h-full outline-none rounded-md flex-1' type='text' placeholder='Ürün adı, anahtar kelimesi veya ürün kodu giriniz...' />
            <Icon icon="hugeicons:search-01" className='text-xl cursor-pointer text-gray-500' />
         </div>
      </div>
   )
}

export default SearchBar
