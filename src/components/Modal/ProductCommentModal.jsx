import React from 'react'
import Modal from '.'
import useModalStore, { toggleCommentModal } from '$/store/modal'
import ReactStars from 'react-stars';
import { Icon } from '@iconify/react';

const ProductCommentModal = () => {
  const modalStore = useModalStore();
  return (
    <Modal isVisible={modalStore.productComment} onClose={() => toggleCommentModal(false)} cardClasses="w-full mx-5 md:w-[500px] md:mx-0">
      <div className='p-5'>
        <h1 className='text-xl font-bold'>Ürünü Değerlendir</h1>

        <div className='w-full mt-3'>
          <ReactStars
            edit
            value={4}
            onChange={(val) => { }}
            count={5}
            size={30}
          />

          <div className='my-3'>
            <label className='text-sm'>Düşüncelerinizi paylaşın!</label>
            <textarea rows={7} onChange={(val) => { }} className='border border-gray-200 w-full resize-none p-2 rounded-md mt-3'></textarea>
          </div>

          <button onClick={()=>toggleCommentModal(false)} className='bg-primary text-white rounded-md px-3 py-2 flex items-center justify-center gap-2 ml-auto'>
            <Icon icon="formkit:submit" />
            <h1 className='text-sm'>Değerlendirmeyi Gönder</h1>
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ProductCommentModal
