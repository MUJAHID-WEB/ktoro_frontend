import React, { ReactNode } from 'react'
import { FreeDelivery } from './ItemSvg/FreeDelivery'
import { FreeExchange } from './ItemSvg/FreeExchange'
import { Payment } from './ItemSvg/Payment'
import Image from 'next/image'

export const ServiceOffers = () => {
  return (
    <section className='flex flex-row justify-between bg-white py-[40px] px-[140px]'>


      <ServiceOffersCard
        icon={<FreeDelivery />}
        heading='توصيل مجاني'
        description='توصيل مجاني لجميع الطلبات عند
      الشراء بقيمة تزيد عن 399 ريال' />

      <ServiceOffersCard
        icon={<FreeExchange />}
        heading='استبدال مجاني خلال 14 يوم'
        description='ضمان استبدال أو استرداد الاموال
        لجميع الطلبات خلال 14 يوم من الشراء' />

      <ServiceOffersCard
        icon={<Payment />}
        heading='الدفع عند الاستلام'
        description='لضمان راحة الزبائن وكسب ثقتهم' />

      <div className='flex flex-col w-[197px]'>
        <Image src='/images/Item/PoweredByGaon.png' width={45} height={64} alt='Powered By' />
        <h3>مدعوم من قبل</h3>
        <p>جميع البوماتنا تحسب ضمن
          مخطط هانتيو وقاون</p>

      </div>


    </section>
  )
}


export const ServiceOffersCard = ({ icon, heading, description }: { icon: ReactNode; heading: string; description: string; }) => {
  return (
    <div className='flex flex-col w-[197px]'>
      {icon}
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  )
}

