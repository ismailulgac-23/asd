"use client";
import React from 'react'
import Sidebar from './Sidebar'

const AdminLayout = ({ className,children }) => {
   return (
      <html>
         <body className={className}>
            <div className='flex items-start'>
               {children}
            </div>
         </body>
      </html>
   )
}

export default AdminLayout
