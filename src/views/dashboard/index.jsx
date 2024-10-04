import { Icon } from '@iconify/react'
import React from 'react'

const DashboardView = () => {
   return (
      <div className='w-screen h-screen bg-[#ebe7f0] overflow-y-auto overflow-x-hidden text-white p-3'>
         <div className='bg-primary text-white rounded-md p-3 mb-5'>
            <div className='flex items-center justify-between'>
               <img src='/logo.png' className='w-[200px]' />
               <button>
                  <Icon icon="heroicons:bars-2-20-solid" className='text-4xl' />
               </button>
            </div>
            <div className='flex items-center justify-between w-full mt-3'>
               <div className='flex items-center'>
                  <button className='mr-4'>
                     <Icon icon="teenyicons:arrow-left-circle-solid" className='text-3xl' />
                  </button>
                  <h1 className='text-lg mr-2'> Tüm şub  </h1>
                  <button className='text-2xl'>
                     <Icon icon="ion:chevron-down" />
                  </button>
               </div>

               <div className='flex items-center justify-center text-white gap-2'>
                  <Icon icon="uiw:date" className='text-xl' />
                  <h1 className='text-base'>01.24.2024</h1>
               </div>
            </div>
         </div>


         <div className='flex items-center justify-between mb-5'>
            <button className='flex items-center justify-center gap-2 bg-white text-primary rounded-md px-4 py-2'>
               <Icon icon="solar:document-add-linear" className='text-xl' />
               ÖZET BİLGİ
            </button>
            <button className='flex items-center justify-between gap-2 bg-white text-primary rounded-md w-[140px] px-2 py-2'>
               <h1 className='text-dark'>CİRO</h1>
               ₺58,000
            </button>
         </div>

         <div className='grid grid-cols-2 gap-3'>
            <StatisticItem icon="mdi:gift-outline" title="KAMPANYALAR" price='₺275,00' />
            <StatisticItem icon="hugeicons:bank" title="BANKALAR" price='₺275,00' />
            <StatisticItem icon="mdi:till" title="KASALAR" price='₺275,00' />
            <StatisticItem icon="octicon:people-24" title="CARİ HESAP" price='₺275,00' />
            <StatisticItem icon="ph:picnic-table-bold" title="MASA SERVİS" price='₺275,00' />
            <StatisticItem icon="mdi:people" title="KUVER SAYISI" price='₺275,00' />
            <StatisticItem icon="mdi:package" title="PAKET SERVİS" price='₺275,00' />
            <StatisticItem icon="icon-park-outline:return" title="İADE ÜRÜNLER" price='₺275,00' />
            <StatisticItem icon="fluent:laptop-briefcase-20-regular" title="ONLINE SERVİS" price='₺275,00' />
            <StatisticItem icon="maki:warehouse" title="DEPOLAR" price='₺275,00' />
            <StatisticItem icon="ion:fast-food-outline" title="HIZLI SATIŞ" price='₺275,00' />
            <StatisticItem icon="lsicon:management-stockout-outline" title="STOKLAR" price='₺275,00' />
            <StatisticItem icon="tabler:discount" title="İNDİRİMLER" price='₺275,00' />
            <StatisticItem icon="ic:baseline-production-quantity-limits" title="ÜRÜNLER" price='₺275,00' />
            <StatisticItem icon="mdi:gift-outline" title="İKRAMLAR" price='₺275,00' />
            <StatisticItem icon="solar:calculator-minimalistic-linear" title="MUHASEBE" price='₺275,00' />
            <StatisticItem icon="fontisto:close" title="İPTALLER" price='₺275,00' />
            <StatisticItem icon="mdi:invoice-text-send-outline" title="GENEL GİDER" price='₺275,00' />
            <StatisticItem icon="formkit:trash" title="ZAYİ / ATIK" price='₺275,00' />
            <StatisticItem icon="mdi:people" title="PERSONEL" price='₺275,00' />
            <StatisticItem icon="fontisto:shopping-pos-machine" title="POS CİHAZLARI" price='₺275,00' />
            <StatisticItem icon="fontisto:motorcycle" title="KURYELER" price='' />
         </div>
      </div>
   )
}

const StatisticItem = ({ title = 'KAMPANYALAR', price = '₺275,00', icon = 'mdi:gift', badge = '7' }) => {
   return (
      <div className='bg-white rounded-md p-4 relative'>
         <div className='absolute top-2 right-2'>
            <div className='w-5 h-5 bg-primary text-white flex items-center justify-center text-sm rounded-md'>{badge}</div>
         </div>
         <Icon icon={icon} className='text-4xl mb-2 text-dark' />
         <div className='flex flex-col items-start'>
            <h1 className='text-dark'>{title}</h1>
            <h3 className='text-primary'>{price}</h3>
         </div>
      </div>
   )
}

export default DashboardView
