import AdminLayout from '$/layouts/AdminLayout';
import React from 'react'
import "../assets/styles/main.css";
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"], })

const ManagerLayout = ({ children }) => {
  return (
    <AdminLayout className={jost.className}>
      {children}
    </AdminLayout>
  );
}

export default ManagerLayout
