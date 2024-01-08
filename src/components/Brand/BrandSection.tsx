import React from 'react'
import { BrandCard } from './BrandCard'
import { BrandSearch } from './BrandSearch'

export const BrandSection = () => {
  return (

    <>
    <BrandSearch />
    
    <div className='mx-[200px] flex flex-row justify-center items-center gap-6 py-7'>
      <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />
      <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />
      <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />

      <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />
      <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />
      <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />

      <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />
      <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />
      <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />

                
    </div>
</>

  )
}
