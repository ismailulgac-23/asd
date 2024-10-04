import { Icon } from '@iconify/react'
import React from 'react'
import NavLinks from './NavLinks'
import { toggleCartModal, toggleMobileMenu, toggleWishlistModal } from '$/store/modal'
import Link from 'next/link'
import MobileMenu from '../MobileMenu'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <>
            <div className='py-4 border-b border-b-gray-200 bg-white'>
                <div className='max-w-full px-4 md:container mx-auto flex items-center justify-between'>
                    <Link href="/">
                        <img src='https://htmldemo.net/bege/bege/images/logo/logo-black.png' className='w-[120px] md:w-[160px] object-contain' />
                    </Link>

                    <SearchBar />

                    <div className='flex items-center gap-3'>
                        <button onClick={() => toggleWishlistModal(true)} className='relative'>
                            <div className='w-5 h-5 flex items-center justify-center rounded-full bg-primary absolute -top-2 -right-3'>
                                <h1 className='text-white text-xs'>2</h1>
                            </div>
                            <Icon icon="carbon:favorite" className='text-3xl' />
                        </button>
                        <button className='relative'>
                            <Icon onClick={() => toggleCartModal(true)} icon="solar:cart-5-linear" className='text-3xl' />
                            <div className='w-5 h-5 flex items-center justify-center rounded-full bg-primary absolute -top-2 -right-3'>
                                <h1 className='text-white text-xs'>4</h1>
                            </div>
                        </button>
                        <Link href="/login">
                            <Icon icon="fluent:person-20-regular" className='text-3xl' />
                        </Link>
                        <button>
                            <Icon onClick={() => toggleMobileMenu()} icon="tabler:menu" fontSize={30} className='flex md:hidden' />
                        </button>
                    </div>


                </div>
            </div>

            <NavLinks />
            <MobileMenu />
        </>
    )
}

export default Navbar
