import React from 'react'
import { UpperHeader } from '../Header/UpperHeader'
import { LowerHeader } from '../Header/LowerHeader'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { ItemImage } from './ItemImage'
import { ItemDescription } from './ItemDescription'
import { ServiceOffers } from './ServiceOffers'
import { ItemAbout } from './ItemAbout'
import { ItemRelated } from './ItemRelated'

export const ItemPage = () => {
    return (
        <>
            <div className=''>
                <UpperHeader />
                <LowerHeader />
                <Navbar />

                <div className='container flex flex-col rtl'>
                    <h4 className=''>
                    الرئيسية / الماركات / المكملات الغذائية / الماركات / الماركات
                    </h4>
                    {/* Item Image and Description */}
                    <div className='flex flex-row justify-start gap-[40px] py-6 px-[40px]'>
                        <ItemImage />
                        <ItemDescription />
                    </div>

                    {/* Service Offers */}
                    <div className='py-6'>
                        <ServiceOffers />
                    </div>

                    {/* About this Product and Reviews */}
                    <div className=''>
                        <div className=''>

                        </div>
                        <ItemAbout />
                    </div>

                    {/* Related Products */}
                    <div className='py-[50px] px-[100px]'>
                        <ItemRelated />
                    </div>
                    

                </div>






                <Footer />
            </div>
        </>


    )
}
