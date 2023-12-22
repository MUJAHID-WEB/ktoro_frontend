import React from 'react'
import Image from 'next/image'

export const AddsFour = () => {
    return (
        <>
            <section className='container flex flex-col justify-start items-start gap-4 pt-[60px]'>

                <div className='bg-[#333333] w-[1240px] aspect-[1240/300] flex items-center justify-center relative'>

                    <Image
                        src="/images/product/01.png"
                        className='text-[#FFFF] '
                        alt="CD PLAYER"
                        fill={true}
                    />
                </div>

                <div className='flex flex-row justify-start items-start gap-4 '>
                    {/* Ads */}
                    <div className='bg-[#333333]  w-[612px] aspect-[612/300] flex items-center justify-center relative'>
                        {/* <p className='text-[#FFFF]'>Cosplay Weapons</p> */}
                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Night Light"
                            fill={true}
                        />
                    </div>

                    {/* Ads */}
                    <div className='bg-[#333333]  w-[612px] aspect-[612/300] flex items-center justify-center relative'>

                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Light Sticks"
                            fill={true}
                        />
                    </div>

                </div>


                <div className='flex flex-row justify-start items-start gap-4 '>
                    {/* Ads */}
                    <div className='bg-[#333333]  w-[402px] aspect-[402/300] flex items-center justify-center relative'>
                        {/* <p className='text-[#FFFF]'>Cosplay Weapons</p> */}
                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Night Light"
                            fill={true}
                        />
                    </div>
                    <div className='bg-[#333333]  w-[402px] aspect-[402/300] flex items-center justify-center relative'>

                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Camera"
                            fill={true}
                        />
                    </div>
                    {/* Ads */}
                    <div className='bg-[#333333]  w-[402px] aspect-[402/300] flex items-center justify-center relative'>

                        <Image
                            src="/images/product/01.png"
                            className='text-[#FFFF] '
                            alt="Light Sticks"
                            fill={true}
                        />
                    </div>

                </div>



            </section>

        </>
    )
}
