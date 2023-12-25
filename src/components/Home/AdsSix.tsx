import React from 'react'
import { AdsComponent } from './AdsComponent'

export const AdsSix = () => {
    return (
        <>
            <section className='container flex flex-row justify-start items-start xl:gap-4 lg:gap-[12.5px] md:gap-[9.5px] sm:gap-[4.5px] md:pt-[60px] sm:pt-6'>

                {/* 02 ads in a row */}

                <AdsComponent
                    className='w-[49.35%] aspect-[612/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />

                <AdsComponent
                    className='!w-[49.35%] aspect-[612/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Costume' />

            </section>

        </>
    )
}
