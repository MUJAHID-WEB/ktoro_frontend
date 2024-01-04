import React from 'react'
import { DownArrow } from '../ItemPage/ItemSvg/DownArrow';

export const AboutKtoro = () => {
  return (
    <div className='flex flex-col rtl my-[24px]'>
     
     
      <h4 className='font-medium text-2xl text-[#333] py-6'>
        عن كيتورو
      </h4>

      <AboutKtoroBtn />
      <AboutKtoroBtn />
      <AboutKtoroBtn />
      <AboutKtoroBtn />

    </div>
  )
}



export const AboutKtoroBtn = () => {
  return (
    
    <div className='flex flex-row justify-between items-center bg-white py-[17px] px-5 w-[80%] mb-3'>

      <p className='font-normal text-lg text-[#494949]'>من هو كيتورو</p>
      <DownArrow />
    </div>
  
  )
}
