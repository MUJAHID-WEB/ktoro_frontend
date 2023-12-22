import React from 'react'
import Image from 'next/image'

export const AdsFive = () => {
    return (
        <>
            <section className='container flex flex-col justify-start items-start gap-4 pt-[60px]'>

                <div className='flex flex-row justify-start items-start gap-4 '>
                    {/* Ads */}
                    <div className='bg-[#333333]  w-[827px] aspect-[827/300] flex items-center justify-center relative'>
                        {/* <p className='text-[#FFFF]'>Cosplay Weapons</p> */}
                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Photo cards"
                            fill={true}
                        />
                    </div>

                    {/* Ads */}
                    <div className='bg-[#333333]  w-[397px] aspect-[397/300] flex items-center justify-center relative'>

                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Stickers"
                            fill={true}
                        />
                    </div>

                </div>

                <div className='flex flex-row justify-start items-start gap-4 '>
                    {/* Ads */}
                    <div className='bg-[#333333]  w-[397px] aspect-[397/300] flex items-center justify-center relative'>
                        {/* <p className='text-[#FFFF]'>Cosplay Weapons</p> */}
                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="photocard wallet"
                            fill={true}
                        />
                    </div>

                    {/* Ads */}
                    <div className='bg-[#333333]  w-[827px] aspect-[827/300] flex items-center justify-center relative'>

                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Photobook"
                            fill={true}
                        />
                    </div>

                </div>


                <div className='flex flex-row justify-start items-start gap-4 '>
                    {/* Ads */}
                    <div className='bg-[#333333]  w-[292px] aspect-[292/300] flex items-center justify-center relative'>
                        {/* <p className='text-[#FFFF]'>Cosplay Weapons</p> */}
                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Tape"
                            fill={true}
                        />
                    </div>
                    <div className='bg-[#333333]  w-[292px] aspect-[292/300] flex items-center justify-center relative'>

                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Card Packs"
                            fill={true}
                        />
                    </div>
                    {/* Ads */}
                    <div className='bg-[#333333]  w-[624px] aspect-[624/300] flex items-center justify-center relative'>

                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Card Packs"
                            fill={true}
                        />
                    </div>

                </div>



            </section>

        </>
    )
}
