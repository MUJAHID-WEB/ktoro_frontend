import React from 'react'
import Image from 'next/image'

export const AddsOne = () => {
  return (
    <>
      <section className='container flex flex-col justify-start items-start gap-4 pt-[60px]'>


        <div className='flex flex-row justify-start items-start gap-4'>
          <div className='flex flex-col justify-start items-start gap-4 w-[612px] '>
            {/* Ads */}
            <div className='bg-[#333333] w-full aspect-[612/300] flex items-center justify-center relative'>
              {/* <p className='text-[#FFFF]'>Cosplay Weapons</p> */}
              <Image
                src="/images/product/01.png"
                className='text-[#FFFF] '
                alt="Cosplay Weapons"
                fill={true}
              />
            </div>
            <div className='bg-[#333333] w-full aspect-[612/300] flex items-center justify-center relative'>

              <Image
                src="/images/product/01.png"
                className='text-[#FFFF] '
                alt="Costume"
                fill={true}
              />
            </div>

          </div>

          <div className='flex flex-col justify-start items-start gap-4 w-[612px] '>
            {/* Ads */}
            <div className='bg-[#333333] w-full aspect-[612/300] flex items-center justify-center relative'>

              <Image
                src="/images/product/01.png"
                className='text-[#FFFF] '
                alt="T-shirt"
                fill={true}
              />
            </div>
            <div className='bg-[#333333] w-full aspect-[612/300] flex items-center justify-center relative'>

              <Image
                src="/images/product/01.png"
                className='text-[#FFFF] '
                alt="Sweatshirts"
                fill={true}
              />
            </div>

          </div>


        </div>
        <div className='bg-[#333333] w-[1240px] aspect-[1240/300] flex items-center justify-center relative'>

          <Image
            src="/images/product/01.png"
            className='text-[#FFFF] '
            alt="Hoodie"
            fill={true}
          />
        </div>

      </section>

    </>
  )
}
