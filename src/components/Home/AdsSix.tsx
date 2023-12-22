import React from 'react'
import Image from 'next/image'

export const AdsSix = () => {
  return (
    <>
    <section className='container flex flex-col justify-start items-start gap-4 pt-[60px]'>

        <div className='flex flex-row justify-start items-start gap-4 '>
            {/* Ads */}
            <div className='bg-[#333333]  w-[612px] aspect-[612/300] flex items-center justify-center relative'>
                {/* <p className='text-[#FFFF]'>Cosplay Weapons</p> */}
                <Image
                    src="/images/product/01.png"
                    className='text-[#FFFF] '
                    alt="Photo cards"
                    fill={true}
                />
            </div>

            {/* Ads */}
            <div className='bg-[#333333]  w-[612px] aspect-[612/300] flex items-center justify-center relative'>

                <Image
                    src="/images/product/01.png"
                    className='text-[#FFFF] '
                    alt="Stickers"
                    fill={true}
                />
            </div>

        </div>

     </section>

</>
  )
}
