import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductSection() {
  return (
    <>
    <section className='container pt-[60px]'>
        {/* Section Heading */}
        <div className='flex flex-row-reverse justify-between items-center pb-6'>
            <h3 className=''>طلب مسبق</h3>
            <button className=''>عرض الكل</button>
        </div>

        {/* Product List */}
        <div className='flex flex-row justify-start items-start gap-6'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
           
        </div>


    </section>
    
    </>
    
  )
}