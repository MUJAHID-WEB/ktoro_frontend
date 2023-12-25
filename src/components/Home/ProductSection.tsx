import React from 'react'
import {ProductCard} from '../ProductCard/ProductCard'
import {SliderButton} from './SliderButton'
import Link from 'next/link'


export const ProductSection = ({ sectionTitle, sectionUrl }:{sectionTitle:string; sectionUrl:string;}) => {

  

  return (
    <>
      <section className='container md:pt-[60px] sm:pt-6'>
        {/* Section Heading */}
        <div className='flex flex-row-reverse justify-between items-center pb-6 font-medium md:text-2xl sm:text-lg'>
          <h3 className=''> {sectionTitle}</h3>
          <Link href={sectionUrl} className='text-[#2B8DC5]'>عرض الكل</Link>
        </div>

        {/* Product List */}
        <div className='flex flex-row justify-start items-start gap-6'>
          <ProductCard />
          {/* <ProductCard />
          <ProductCard />
          <ProductCard /> */}

        </div>

        <div className='md:flex flex-row justify-center items-center pt-6 sm:hidden '>
          <SliderButton />
        </div>




      </section>

    </>

  )
}
