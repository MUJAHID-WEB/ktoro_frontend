import React from 'react'
import { AdsComponent } from './AdsComponent'

export const AddsThree = () => {
    return (
        <>
            <section className='container flex flex-row justify-start items-start xl:gap-4 lg:gap-[12.8px] md:gap-[9.8px] sm:gap-[4.5px] md:pt-[60px] sm:pt-6'>

                <AdsComponent
                    className='w-full aspect-[1240/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />

                <AdsComponent
                    className='w-[32.46%] aspect-[402/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />

                <AdsComponent
                    className='w-[32.46%] aspect-[402/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />

                <AdsComponent
                    className='!w-[32.46%] aspect-[402/300]'
                    adsImage='/images/product/01.png'
                    adsAlt='Cosplay Weapons' />



            </section>

        </>
    )
}

