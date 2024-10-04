"use client";
import { Icon } from '@iconify/react'
import cls from "classnames";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

const SidebarLink = ({ title, icon, href }) => {
   const pathname = usePathname();
   const isActive = useMemo(() => {
      return href === pathname;
   }, [pathname]);
   return (
      <Link href={href} className='flex items-center gap-2 text-gray200 p-3 border-b border-b-zinc-700 group cursor-pointer'>
         <Icon icon={icon} className={cls('text-2xl group-hover:text-white transition-all',
            {
               'text-white': isActive
            }
         )} />
         <h3 className={cls('transition-all group-hover:text-white',
            {
               'text-white': isActive
            }
         )}>{title}</h3>
      </Link>
   )
}

export default SidebarLink
