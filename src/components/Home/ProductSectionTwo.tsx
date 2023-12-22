import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import Link from 'next/link'
import Image from 'next/image'

export const ProductSectionTwo = () => {
  return (
    <>
      <section className='container pt-[60px]'>
        {/* Section Heading */}
        <div className='flex flex-row-reverse justify-between items-center pb-6'>
          <h3 className=''> الاكثر مبيعا </h3>
          <Link href={'/'} className=''>عرض الكل</Link>
        </div>

<div className='flex flex-row justify-start items-start gap-6'>
        {/* Product List */}
        <div className='flex flex-col justify-start items-start gap-6'>
          <div className='flex flex-row justify-start items-start gap-6'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className='flex flex-row justify-start items-start gap-6'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        {/* Ads */}
        <div className='bg-[#333333] w-[292px] aspect-[292/936] flex items-center justify-center relative'>

          <Image
            src="/images/product/01.png"
            className='text-[#FFFF] '
            alt="Album"
            fill={true}
          />
        </div>
</div>
      </section>

    </>

  )
}

