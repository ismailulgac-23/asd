import React from 'react'
import SidebarLink from './SidebarLink';

export const sidebarLinks = [
   { title: "Genel Yönetim", icon: "ri:dashboard-line", href: "/" },
   { title: "Botlar", icon: "bx:bot", href: "/bots" },
   { title: "Sanatçılar", icon: "zondicons:artist", href: "/artists" },
   { title: "Kazançlar", icon: "solar:dollar-linear", href: "/earnings" },
];

const Links = () => {
   return (
      <div>
         {sidebarLinks.map((sidebarLink, index) => {
            return (
               <SidebarLink key={index} {...sidebarLink} />
            )
         })}
      </div>
   )
}

export default Links
