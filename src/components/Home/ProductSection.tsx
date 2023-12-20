import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductSection() {
  return (
    <>
    <div className='w-full px-[100px]'>
        {/* Section Heading */}
        <div className='flex flex-row-reverse justify-between py-6'>
            <p className=''>طلب مسبق</p>
            <button className=''>عرض الكل</button>
        </div>

        {/* Product List */}
        <div className='flex flex-row justify-between gap-4 mr-6'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
           
        </div>


    </div>
    
    </>
    
  )
}
