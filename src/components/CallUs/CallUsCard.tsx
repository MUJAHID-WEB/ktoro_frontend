import Image from 'next/image'
import React from 'react'

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
