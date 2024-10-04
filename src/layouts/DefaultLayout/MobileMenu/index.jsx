import { motion, AnimatePresence } from 'framer-motion';
import useModalStore, { toggleCartModal, toggleMobileMenu } from '$/store/modal';
import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import useOutsideClick from '$/hooks/useOutsideClick';
import { mobileMenuLinks } from '../Navbar/NavLinks';
import Link from 'next/link';

const MobileMenu = () => {
   const isAuth = false;
   const containerRef = useRef(null);
   const modalStore = useModalStore();

   const onClickOutside = () => {
      toggleMobileMenu(false);
   }

   useOutsideClick(containerRef, onClickOutside);

   const sidebarVariants = {
      hidden: { x: '-100%' },
      visible: { x: 0 },
      exit: { x: '-100%' },
   };

   const handleClickMobileMenu = () => {
      toggleMobileMenu(false);
   }


   return (
      <AnimatePresence>
         {modalStore.mobileMenu && (
            <motion.div
               className='fixed top-0 left-0 w-screen h-screen z-50 bg-black/45 inset-0'
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               <motion.div
                  ref={containerRef}
                  className='absolute top-0 left-0 w-[300px] h-full bg-white'
                  variants={sidebarVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: 'tween', duration: 0.3 }}
               >
                  <div className='px-5 h-[70px] flex items-center justify-between w-full border-b border-b-gray-200'>
                     <h1 className='text-xl font-medium'>Hızlı Menü</h1>
                     <button onClick={() => toggleMobileMenu(false)}>
                        <Icon icon="material-symbols:close" className='text-2xl' />
                     </button>
                  </div>

                  <div className='w-full flex flex-col items-start justify-between' style={{ height: "calc(100% - 70px)" }}>
                     <div className='w-full'>
                        {mobileMenuLinks.map((navLink, index) => (
                           <Link onClick={handleClickMobileMenu} className='flex items-center gap-1 px-4 py-3 border-b border-b-gray-200' key={index} href={navLink.href}>
                              <Icon icon={navLink.icon} fontSize={20} />
                              <h1>{navLink.title}</h1>
                           </Link>
                        ))}
                     </div>

                     {isAuth ? (
                        <div className='flex flex-col items-start p-3 w-full'>
                           <h1 className='text-sm mb-2'>Hoşgeldin, ismail ulgac!</h1>
                           <button className='bg-primary py-3 rounded-md text-white w-full flex items-center justify-center gap-2'>
                              <Icon icon="codicon:account" fontSize={18} />
                              <h1 className='text-sm'>Hesabım</h1>
                           </button>
                        </div>
                     ) : (
                        <div className='flex flex-col items-start p-3 w-full'>
                           <h1 className='text-sm mb-2'>Üye değil misin?</h1>
                           <button className='bg-primary py-3 rounded-md text-white w-full'>HEMEN KAYIT OL!</button>
                        </div>
                     )}
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default MobileMenu;
