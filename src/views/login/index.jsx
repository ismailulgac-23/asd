"use client";
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginView = () => {
   const router = useRouter();

   const handleLogin = () => {
      router.push('/pin');
   }

   return (
      <div className='flex items-center justify-center w-screen h-screen bg-dark'>
         <div className='max-w-md w-full'>
            <div className='flex items-center justify-center'>
               <img src='/logo.png' className='w-[260px] object-contain' />
            </div>

            <h1 className='my-5 text-center text-white text-xl'>Patron Girişi</h1>

            <div className='px-20'>
               <input type='text' placeholder='E-Posta' className='px-3 py-2 border border-gray-200 w-full rounded-md mb-2' />
               <input type='password' placeholder='Parola' className='px-3 py-2 border border-gray-200 w-full rounded-md mb-2' />
               <div className='flex items-center justify-between gap-2'>
                  <button onClick={handleLogin} style={{ width: "calc(100% - 40px)"}} className='h-[40px] bg-white text-primary px-4 rounded-md flex items-center justify-center gap-2 ml-auto'>
                     <Icon icon="ant-design:login-outlined" className='text-2xl' />
                     Giriş Yap
                  </button>
                  <button onClick={handleLogin} className='bg-white h-[40px] w-[40px] text-primary rounded-md flex items-center justify-center gap-2 ml-auto'>
                     <Icon icon="mdi:language" className='text-2xl' />
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginView
