"use client";
import { Icon } from '@iconify/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const PinView = () => {
   const router = useRouter();

   const [value, setValue] = useState("");

   const handleLogin = () => {
      router.push('/admin');
   }

   return (
      <div className='flex items-center justify-center w-screen h-screen bg-dark'>
         <div className='max-w-md w-full'>
            <div className='flex items-center justify-center flex-col gap-5 mb-5'>
               <img src='/logo.png' className='w-[260px] object-contain' />
               <Icon icon="mingcute:user-4-fill" className='text-white' fontSize={90} />
            </div>


            <div className='px-20'>

               <div className='bg-white rounded-md flex items-center justify-between h-[65px]'>
                  <input type='text' disabled className='h-full ml-5 w-full text-black text-2xl text-center' value={value} />
                  <Link href="/dashboard">
                     <button className='flex-shrink-0 px-3'>
                        <Icon icon="el:arrow-right" className='text-primary text-4xl' />
                     </button>
                  </Link>
               </div>


               <div className='grid grid-cols-3 gap-3 mt-5'>
                  <button onClick={() => setValue(prev => prev + (1).toString())} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>1</button>
                  <button onClick={() => setValue(prev => prev + (2).toString())} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>2</button>
                  <button onClick={() => setValue(prev => prev + (3).toString())} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>3</button>

                  <button onClick={() => setValue(prev => prev + (4).toString())} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>4</button>
                  <button onClick={() => setValue(prev => prev + (5).toString())} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>5</button>
                  <button onClick={() => setValue(prev => prev + (6).toString())} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>6</button>

                  <button onClick={() => setValue(prev => prev + (7).toString())} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>7</button>
                  <button onClick={() => setValue(prev => prev + (8).toString())} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>8</button>
                  <button onClick={() => setValue(prev => prev + (9).toString())} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>9</button>

                  <button onClick={() => setValue("C")} className='border-[5px] h-[82px] flex-shrink-0 border-white text-primary font-bold text-4xl rounded-full'>C</button>
                  <button onClick={() => setValue(prev => prev + "0")} className='border-[5px] h-[82px] flex-shrink-0 border-white text-white font-bold text-4xl rounded-full'>0</button>
                  <button onClick={() => setValue(prev => prev.slice(0, -1))} className='border-[5px] h-[82px] flex-shrink-0 border-white text-primary font-bold text-4xl rounded-full flex items-center justify-center'>
                     <Icon icon="el:arrow-left" />
                  </button>
               </div>

            </div>
         </div>
      </div>
   )
}

export default PinView
