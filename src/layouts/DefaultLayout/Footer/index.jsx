import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import LinkCreator from './LinkCreator'
import { navLinks } from '../Navbar/NavLinks'

const Footer = () => {
  return (
    <div className='border-t border-t-gray-200 bg-white mt-10'>
      <div className='mx-auto container grid grid-cols-1 place-items-start md:place-items-center md:grid-cols-3 p-5 gap-10'>
        <div className=''>
          <Link href="/">
            <img src='https://htmldemo.net/bege/bege/images/logo/logo-black.png' className='w-[120px] md:w-[160px] object-contain' />
          </Link>

          <p className='text-gray-500 mt-4'>
            Mağazamızdan istediğiniz ürünü dakikalar içinde kolayca satın alabilirsiniz. Ürün stoğumuzda varsa aynı gün yok ise 1-7 iş günü içerisinde adresinize teslim edilecektir. Güvenilir hizmet hızlı teslimat ve 7/24 iletişim.
          </p>

          <div className='flex items-center gap-2 mt-4'>
            <Icon icon="mdi:location-outline" fontSize={28} className='text-primary flex-shrink-0' />
            <h1 className='text-sm'>
              <strong className='text-primary'>Adres: </strong>
              Adres: Narlıhopur Mahallesi, Türkoğlu Çiftliği, No: 56 , Hatay/Kırıkhan
            </h1>
          </div>

          <div className='flex items-center gap-2 mt-4'>
            <Icon icon="ic:baseline-whatsapp" fontSize={25} className='text-primary flex-shrink-0' />
            <h1 className='text-sm'>
              <strong className='text-primary'>WhatsApp: </strong>
              +90 (531) 870 6998
            </h1>
          </div>
        </div>
        <div className=''>
          <LinkCreator
            title="Bege Store"
            links={navLinks}
          />
        </div>
        <div className=''>
          <LinkCreator
            title="Sözleşmeler"
            links={[
              { title: "Gizlilik Sözleşmesi", icon: "material-symbols-light:contract", href: "/" },
              { title: "İade Koşulları", icon: "f7:return", href: "/" },
            ]}
          />
        </div>
      </div>

      <div className='py-4 w-full mx-auto container flex-col gap-2 md:gap-0 md:flex-row flex items-center justify-between'>
        <h1 className='text-gray-400'>İSMAİL ULĞAÇ | © 2024 Tüm Hakları Saklıdır.</h1>
        <img src='https://turcogurme.com/public/front/timode/imgs/theme/payment-method.png' />
      </div>
    </div>
  )
}

export default Footer
