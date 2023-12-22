import React from 'react'
import Image from 'next/image'

export const AddsTwo = ({adsImage, adsAlt}:{adsImage:string; adsAlt:string}) => {
  return (
    <>
      <section className='container flex flex-col justify-center items-center pt-[60px]'>


      
        <div className='bg-[#333333] w-[1240px] aspect-[1240/300] flex items-center justify-center relative'>

          <Image
            src={adsImage}
            className='text-[#FFFF] '
            alt={adsAlt}
            fill={true}
          />
        </div>

      </section>

    </>
  )
}
