import Link from 'next/link'
import React from 'react'

const Logo = () => {
   return (
      <Link href="/admin">
         <div className='h-[100px] w-full px-4 flex items-center justify-center border-b border-b-zinc-700'>
            <h1 className='text-4xl font-bold text-white'>SpoBot</h1>
         </div>
      </Link>
   )
}

export default Logo
