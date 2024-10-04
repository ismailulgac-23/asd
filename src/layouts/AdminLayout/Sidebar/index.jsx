import React from 'react'
import Logo from './Logo'
import Links from './Links'

const Sidebar = () => {
   return (
      <div className='w-[280px] flex-shrink-0 h-screen bg-dark'>
         <Logo />
         <Links />
      </div>
   )
}

export default Sidebar
