import React from 'react'
import Image from 'next/image'


export const AdsComponent = ({ className, adsImage, adsAlt }: { className: string; adsImage: string; adsAlt: string }) => {
  return (

    <div className={`bg-[#333333] ${className} last:w-full default:w-full default:aspect-[1240/300] flex items-center justify-center relative`}>

      <Image
        src={adsImage}
        className='text-[#FFFF] '
        alt={adsAlt}
        fill={true}
      />
    </div>

  )
}
