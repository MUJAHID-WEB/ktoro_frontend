import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import SliderButton from './SliderButton'
import Link from 'next/link'

export default function ProductSection({ sectionTitle, sectionUrl }:{sectionTitle:string; sectionUrl:string;}) {

  

  return (
    <>
      <section className='container pt-[60px]'>
        {/* Section Heading */}
        <div className='flex flex-row-reverse justify-between items-center pb-6'>
          <h3 className=''> {sectionTitle}</h3>
          <Link href={sectionUrl} className=''>عرض الكل</Link>
        </div>

        {/* Product List */}
        <div className='flex flex-row justify-start items-start gap-6'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>

        <div className='flex flex-row justify-center items-center pt-6'>
          <SliderButton />
        </div>




      </section>

    </>

  )
}
