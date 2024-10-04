import { motion, AnimatePresence } from 'framer-motion';
import useModalStore, { toggleCartModal, toggleWishlistModal } from '$/store/modal';
import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import useOutsideClick from '$/hooks/useOutsideClick';
import Wishlist from "./Wishlist/index";
import WishlistEmpty from "./WishlistEmpty";
import WishlistFooter from './WishlistFooter';

const WishlistSidebar = () => {
  const isWishlistEmpty = false;
  const wishlistRef = useRef(null);
  const modalStore = useModalStore();

  const onClickOutside = () => {
    toggleWishlistModal(false);
  }

  useOutsideClick(wishlistRef, onClickOutside);

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' },
  };



  return (
    <AnimatePresence>
      {modalStore.wishlist && (
        <motion.div
          className='fixed top-0 left-0 w-screen h-screen z-50 bg-black/45 inset-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={wishlistRef}
            className='absolute top-0 right-0 w-full md:w-[500px] h-full bg-white'
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className='px-5 h-[70px] flex items-center justify-between w-full border-b border-b-gray-200'>
              <h1 className='text-lg font-medium'>(3) Öğe</h1>
              <button onClick={() => toggleWishlistModal(false)}>
                <Icon icon="material-symbols:close" className='text-2xl' />
              </button>
            </div>

            <div className='w-full' style={{ height: "calc(100% - 50px)" }}>
              {isWishlistEmpty ? (
                <WishlistEmpty />
              ) : (
                <React.Fragment>
                  <Wishlist />
                  <WishlistFooter />
                </React.Fragment>
              )}


            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WishlistSidebar;
