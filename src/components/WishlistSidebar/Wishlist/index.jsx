import SidebarProduct from '$/components/SidebarProduct'
import React from 'react'

const CartList = () => {
   return (
      <div className='flex flex-col items-start overflow-y-auto overflow-x-hidden' style={{ height: "calc(100% - 120px)"}}>
         {Array.from(Array(100).keys()).map((e, i) => {
            return (
               <SidebarProduct key={i} />
            )
         })}
      </div>
   )
}

export default CartList
