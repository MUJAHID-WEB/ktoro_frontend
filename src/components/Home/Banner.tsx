import React from 'react'
import Image from 'next/image'

export const Banner = () => {
  return (
    <>
      <section className='container flex flex-row justify-center items-center xl:pt-10 lg:pt-10 md:pt-6 xl:gap-6 lg:gap-5 md:gap-4 sm:invisible md:visible'>

        <div className='flex flex-col justify-start items-start xl:gap-6 lg:gap-5 md:gap-4 w-[40%]'>
          {/* Ads */}
          <div className='bg-[#333333] w-full aspect-[397/198] relative'>
            <Image
              src="/images/product/01.png"
              className='text-[#FFFF] '
              alt="CD PLAYER"
              fill={true}
            />
          </div>
          <div className='bg-[#333333] w-full aspect-[397/198] relative'>
            <Image
              src="/images/product/01.png"
              className='text-[#FFFF] '
              alt="CD PLAYER"
              fill={true}
            />
          </div>

        </div>



        <div className='bg-[#333333] w-[60%] aspect-[800/420] relative'>
          {/* Slider */}
          <Image
            src="/images/product/01.png"
            className='text-[#FFFF] '
            alt="CD PLAYER"
            fill={true}
          />

        </div>

      </section>

      {/* mobile responsive */}
      <section className='container flex flex-row justify-center items-center sm:pt-6 md:hidden sm:block'>

        <div className='bg-[#333333] sm:w-[100%] sm:aspect-[396/190] relative'>
          {/* Slider */}
          <Image
            src="/images/product/01.png"
            className='text-[#FFFF] '
            alt="CD PLAYER"
            fill={true}
          />

        </div>

      </section>

    </>

  )
}
