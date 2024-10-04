import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const LinkCreator = ({ title, links }) => {
   return (
      <div className='flex items-start flex-col'>
         <h1 className='text-xl font-medium mb-4'>{title}</h1>
         <div className='flex flex-col items-start gap-4'>
            {links.map((link, index) => (
               <Link href={link.href} key={index} className='flex items-center gap-2 hover:text-primary transition-all'>
                  {link.icon && (
                     <Icon icon={link.icon} className='text-xl' />
                  )}
                  <h1>{link.title}</h1>
               </Link>
            ))}
         </div>
      </div>
   )
}

export default LinkCreator
