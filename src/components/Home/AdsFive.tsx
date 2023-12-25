import React from 'react'
import { AdsComponent } from './AdsComponent'

export const AdsFive = () => {
    return (
        <>
            <section className='container flex flex-row justify-start items-start xl:gap-4 lg:gap-[12.5px] md:gap-[9.5px] sm:gap-[4.5px] md:pt-[60px] sm:pt-6'>

                <AdsComponent
                    className='w-[66.65%] aspect-[827/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />

                <AdsComponent
                    className='w-[32.02%] aspect-[397/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Costume' />

                {/* 02 ads in a row */}

                <AdsComponent
                    className='w-[32.02%] aspect-[397/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Costume' />

                <AdsComponent
                    className='w-[66.65%] aspect-[827/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />

                {/* 03 ads in a row */}
                <AdsComponent
                    className='w-[23.53%] aspect-[292/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />

                <AdsComponent
                    className='w-[23.53%] aspect-[292/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />

                <AdsComponent
                    className='!w-[50.29%] aspect-[624/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />



            </section>

        </>
    )
}
