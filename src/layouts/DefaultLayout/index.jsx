"use client";
import React from 'react'
import cls from "classnames";
import Topbar from './Topbar';
import Navbar from './Navbar';
import CartSidebar from '$/components/CartSidebar';
import Footer from './Footer';
import WishlistSidebar from '$/components/WishlistSidebar';

const DefaultLayout = ({ className, children }) => {
    return (
        <html>
            <body className={cls(className, 'antialiased')}>
                <Topbar />
                <Navbar />
                {children}
                <Footer />
                <CartSidebar />
                <WishlistSidebar />
            </body>
        </html>
    )
}

export default DefaultLayout
