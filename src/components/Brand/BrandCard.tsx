import Image from 'next/image'
import React from 'react'

export const BrandCard = ({ image, title }: { image: string; title: string;  }) => {
    return (


        <div className='flex flex-col justify-start items-center pt-4 bg-white border border-[#8F8F8F] rounded-md w-[240px]'>
            <Image
                src={image}
                alt="My SVG"
               className=''
               width={80}
               height={80}
            />

            <h5 className='py-4 font-bold text-xl text-[#333]'>{title}</h5>
        </div>

    )
}
