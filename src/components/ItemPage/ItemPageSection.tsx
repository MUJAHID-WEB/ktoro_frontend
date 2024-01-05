import React from 'react'
import { ItemImage } from './ItemImage'
import { ItemDescription } from './ItemDescription'
import { ServiceOffers } from './ServiceOffers'
import { ItemRelated } from './ItemRelated'
import { ItemReviews } from './ItemReviews'

export const ItemPageSection = () => {
    return (
        <>

            <div className='flex flex-col px-5 rtl'>
                <h4 className='pt-[40px] pb-3 font-normal text-base text-[#242424]'>
                    الرئيسية / الماركات / المكملات الغذائية / الماركات / الماركات
                </h4>
                {/* Item Image and Description */}
                <div className='flex flex-row justify-start gap-[40px] py-6 px-[40px] bg-white rounded-[6px]'>
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
                    {/* <ItemAbout /> */}
                    <ItemReviews />
                </div>

                {/* Related Products */}
                <div className='py-[50px] px-[100px]'>
                    <ItemRelated />
                </div>


            </div>

        </>


    )
}
