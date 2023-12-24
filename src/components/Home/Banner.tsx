import React from 'react'
import Image from 'next/image'

export const Banner = () => {
  return (
    <>
      <section className='container flex flex-row justify-center items-center xl:pt-10 lg:pt-10 gap-6 sm:invisible lg:visible'>

        <div className='flex flex-col justify-start items-start gap-6 xl:w-[397px] lg:w-[300px]'>
          {/* Ads */}
          <div className='bg-[#333333] w-full xl:aspect-[397/198] lg:aspect-[300/150] relative'>
            <Image
              src="/images/product/01.png"
              className='text-[#FFFF] '
              alt="CD PLAYER"
              fill={true}
            />
          </div>
          <div className='bg-[#333333] w-full xl:aspect-[397/198] lg:aspect-[300/150] relative'>
            <Image
              src="/images/product/01.png"
              className='text-[#FFFF] '
              alt="CD PLAYER"
              fill={true}
            />
          </div>

        </div>



        <div className='bg-[#333333] xl:w-[800px] lg:w-[632px] xl:aspect-[800/420] lg:aspect-[632/325] relative'>
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
      <section className='container flex flex-row justify-center items-center md:pt-6 gap-6 lg:hidden md:block'>

        <div className='bg-[#333333] md:w-[750px] md:aspect-[750/350] sm:w-[396px] sm:aspect-[396/190] relative'>
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
