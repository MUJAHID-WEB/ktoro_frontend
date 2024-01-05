import React from 'react'
import { CallUsCard } from './CallUsCard'


export const CallUsSection = () => {
    return (
        <>
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

        </>
    )
}



