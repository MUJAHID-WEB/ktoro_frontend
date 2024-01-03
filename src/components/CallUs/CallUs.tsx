import React from 'react'
import { UpperHeader } from '../Header/UpperHeader'
import { LowerHeader } from '../Header/LowerHeader'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import Image from 'next/image'

export const CallUs = () => {
    return (
        <>
            <div className=''>
                <UpperHeader />
                <LowerHeader />
                <Navbar />

                <div className='flex flex-col justify-center items-center px-[53px] rtl'>
                    <h4 className='pt-[100px] pb-3 font-medium text-[36px] text-[#333]'>
                        ابقي على تواصل
                    </h4>

                    <p className='font-normal text-xl text-[#757575]'>يسعدنا تقديم المساعدة</p>

                    <div className='flex flex-row gap-[14px] py-[71px]'>

                        <CallUsCard image='/images/CallUsSvg/TrackOrder.svg' title='Track Order' subTitle='' />

                        <CallUsCard image='/images/CallUsSvg/Gmail.svg' title='راسلنا عبر الايمل' subTitle='' />

                        <CallUsCard image='/images/CallUsSvg/Facebook.svg' title='راسلنا عبر فيسبوك' subTitle='' />

                        <CallUsCard image='/images/CallUsSvg/Instagram.svg' title='راسلنا عبر انستقرام' subTitle='' />

                        <CallUsCard image='/images/CallUsSvg/Twitter.svg' title='راسلنا عبر x' subTitle='' />

                        <CallUsCard image='/images/CallUsSvg/Message.svg' title='دردش معنا' subTitle='سنعود للتواجد أونلاين قريبا' />

                        <CallUsCard image='/images/CallUsSvg/Phone.svg' title='تحدث إلينا' subTitle='سوف يتوفر الرقم قريبا' />

                    </div>

                </div>

                <Footer />
            </div>
        </>
    )
}




export const CallUsCard = ({ image, title, subTitle }: { image: string; title: string; subTitle: string; }) => {
    return (


        <div className='flex flex-col justify-start items-center p-6 pb-1 bg-white border border-[#E7E7E7] rounded-md w-[177px]'>
            <Image
                src={image}
                alt="My SVG"
                width={70}
                height={70}
            />

            <h5 className='pt-4 font-medium text-xl text-[#333]'>{title}</h5>
            <p className='font-normal text-sm text-[#757575]'>{subTitle}</p>

        </div>

    )
}
