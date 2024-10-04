import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useModalStore from '$/store/modal';
import { Icon } from '@iconify/react';

const CategoryDropdown = ({ categoryRef }) => {
   const modalStore = useModalStore();
   const sidebarVariants = {
      hidden: { y: '100%', opacity: 1 },
      visible: { y: 0 },
      exit: { y: '100%', opacity: 0 },
   };
   return (
      <AnimatePresence>
         {modalStore.categoriesMenu ? (
            <motion.div
               className='absolute top-12 rounded-md left-0 bg-white shadow-lg w-[200px] h-[300px] z-50'
               variants={sidebarVariants}
               ref={categoryRef}
               initial="hidden"
               animate="visible"
               exit="exit"
               transition={{ type: 'tween', duration: 0.3 }}
            >
               <div className='flex flex-col items-start h-full overflow-y-auto overflow-x-hidden'>
                  {Array.from(Array(20).keys()).map((e, i) => {
                     return (
                        <div key={i} className='flex items-center gap-2 p-2 border-b border-b-gray-200 last:border-none w-full hover:bg-gray-100 cursor-pointer'>
                           <Icon icon="ph:dress-light" className='text-lg' />
                           <h1 className='text-sm'>Kadın Giyim</h1>
                        </div>
                     )
                  })}
               </div>
            </motion.div>
         ) : null}
      </AnimatePresence>
   )
}

export default CategoryDropdown
