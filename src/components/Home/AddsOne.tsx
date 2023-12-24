import React from 'react'
import Image from 'next/image'
import { AdsComponent } from './AdsComponent'

export const AddsOne = () => {
  return (
    <>
      <section className='container flex flex-row justify-start items-start xl:gap-4 lg:gap-[12px] md:gap-[9.6px] sm:gap-[4px] md:pt-[60px] sm:pt-6'>

        <AdsComponent
          className='w-[49.35%] aspect-[612/300]'
          adsImage='/images/product/01.png'
          adsAlt='Cosplay Weapons' />

        <AdsComponent
          className='w-[49.35%] aspect-[612/300]'
          adsImage='/images/product/01.png'
          adsAlt='Costume' />

        <AdsComponent
          className='w-[49.35%] aspect-[612/300]'
          adsImage='/images/product/01.png'
          adsAlt='T-shirt' />

        <AdsComponent
          className='w-[49.35%] aspect-[612/300]'
          adsImage='/images/product/01.png'
          adsAlt='Sweatshirts' />

        <AdsComponent
          className='w-[49.35%] aspect-[1240/300]'
          adsImage='/images/product/01.png'
          adsAlt='Hoodie' />


      </section>

    </>
  )
}
