import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export const navLinks = [
    { title: "Ana Sayfa", icon: "lucide-lab:home", href: "/" },
    { title: "Biz Kimiz?", icon: "mdi:company", href: "/" },
    { title: "Tüm Ürünler", icon: "hugeicons:product-loading", href: "/explore" },
    { title: "İletişim", icon: "healthicons:communication-outline", href: "/contact" },
]
export const mobileMenuLinks = [
    ...navLinks,
    { title: "Misyonumuz", icon: "carbon:location-company", href: "/" },
    { title: "Gizlilik Sözleşmesi", icon: "material-symbols-light:contract", href: "/" },
    { title: "İade Koşulları", icon: "f7:return", href: "/" },
    { title: "Sipariş Takip", icon: "wpf:search", href: "/track-order" },
]

const NavLinks = () => {
    return (
        <div className='hidden md:flex w-full h-[65px] border-b border-b-gray-200 bg-white'>
            <div className='mx-auto container flex items-center h-full justify-between'>
                <div className='flex items-center mx-auto container h-full gap-8'>
                    {navLinks.map((item, index) => (
                        <Link key={index} href={item.href} className='flex items-center justify-center gap-2 h-full text-base hover:text-primary transition-all'>
                            {item.icon ? (
                                <Icon icon={item.icon} className='text-xl' />
                            ) : (
                                <img src={item.image} className='w-[22px] h-[22px]' />
                            )}
                            <h1>{item.title}</h1>
                        </Link>
                    ))}
                </div>
                <Link href="/track-order" className='bg-primary flex-shrink-0 flex text-white px-4 py-2 rounded-md items-center justify-center gap-3'>
                    <Icon icon="wpf:search" />
                    Sipariş Takip
                </Link>
            </div>
        </div>
    )
}

export default NavLinks
