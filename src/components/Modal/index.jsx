import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cls from "classnames";
import { Icon } from '@iconify/react';

const Modal = ({ isVisible, onClose, children, cardClasses = "" }) => {
   const backdropVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   };

   const modalVariants = {
      hidden: { opacity: 0, y: '-50%', scale: 0.8 },
      visible: { opacity: 1, y: '0', scale: 1 },
   };

   return (
      <AnimatePresence>
         {isVisible && (
            <motion.div
               className='fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center z-50'
               variants={backdropVariants}
               initial="hidden"
               animate="visible"
               exit="hidden"
               transition={{ duration: 0.3 }}
               onClick={onClose}
            >
               <motion.div
                  className={cls('bg-white rounded-md shadow-lg relative', cardClasses)}
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
               >
                  <button
                     onClick={onClose}
                     className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
                  >
                     <Icon icon="mdi:close" fontSize={25} />
                  </button>
                  {children}
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default Modal;
