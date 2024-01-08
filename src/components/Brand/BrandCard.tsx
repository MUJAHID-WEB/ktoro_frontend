import Image from 'next/image'
import React from 'react'

export const BrandCard = ({ image, title }: { image: string; title: string;  }) => {
    return (


        <div className='flex flex-col justify-start items-center p-6 pb-1 bg-white border border-[#8F8F8F] rounded-md w-[177px]'>
            <Image
                src={image}
                alt="My SVG"
               className=''
            />

            <h5 className='py-4 font-bold text-xl text-[#333]'>{title}</h5>
        </div>

    )
}
