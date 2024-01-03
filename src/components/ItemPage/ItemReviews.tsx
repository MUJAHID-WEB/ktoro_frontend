import React from 'react'
import { Star } from './ItemSvg/Star'
import { DownIcon } from './ItemSvg/DownIcon'
import { DownArrow } from './ItemSvg/DownArrow'

export const ItemReviews = () => {
  return (
    <div className='flex flex-col bg-white justify-center py-6'>
      <div className='flex flex-row justify-between px-[80px]'>
        {/* Ratings */}
        <div className='flex flex-col justify-start items-center'>
          <h4 className='font-normal text-[64px] leading-none text-[#E0B315]'>5</h4>
          <div className='flex flex-row py-6 gap-[0.5px]'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className='font-normal text-base text-[#494949]'>بناء على 323 تقيمات</p>

        </div>

        {/* Comments */}
        <div className='flex flex-col w-[85%]'>
          <div className='flex flex-row justify-between mb-6'>
            <div className='flex flex-row items-center border border-[#A8A8A8] rounded-md p-5'>

              <button className='pl-5 font-normal text-base text-[#000]'>أضيفت مؤخراً</button>
              <DownIcon />

            </div>

            <button className='bg-[#2B8DC5] rounded-md py-4 px-5 font-normal text-lg text-white'>
              أضف تقيمك
            </button>

          </div>

          <div className='flex flex-col justify-start
         border border-[#A8A8A8] rounded-md p-4 mb-4'>
            <div className='flex flex-row gap-[0.5]'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <h4 className='py-1 font-normal text-base text-[#000]'>salman</h4>
            <h6 className='font-normal text-[13px] text-[#494949]'>6-26-2023</h6>
            <p className='py-3 font-normal text-sm text-[#494949]'>برو سبس ليست مجرَد منتج، فهي أسلوب حياة. وهي ليست مجرَد متجر، بل إنها ثورة بحد ذاتها. يطمح كل فرد من عائلة برو سبس بأن تصبح الشركة أشهر شركة مكمِلات رياضية في العالم، لتساعدك على أن تصبح أقوى وأعظم ممَا أنت عليه الآن.</p>

          </div>
        </div>

      </div>

      <div className='my-[50px] border-t border-[#A8A8A8] relative'>

        <div className='flex justify-center items-center bg-[#F4F4F4] border border-[#A8A8A8] rounded-[50px] p-[18px] w-[12%] absolute -top-8 left-[50%]'>
          <DownArrow />
          <p className='font-normal text-base text-[#494949] pr-[10px]'>عرض المزيد</p>
          
        </div>
      </div>
    </div>
  )
}
