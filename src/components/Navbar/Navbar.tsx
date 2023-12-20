import React from 'react'
import ArrowDownBlack from '../svg/ArrowDownBlack'
import SquareBox from '../svg/SquareBox'

export default function Navbar() {
  return (
    <>
    <div className='w-full flex flex-row-reverse gap-8 text-right py-4 bg-[#FFFFFF] px-[100px]'>
        
    <div className='flex flex-row '>
        <ArrowDownBlack/>
            <a href='' className=''>
            جميع الفئات
            </a>
            <SquareBox/>
        </div>
        <div className='flex flex-row '>
        <ArrowDownBlack/>
            <a href='' className=''>
            الموضه
            </a>
        </div>
        <div className='flex flex-row '>
        <ArrowDownBlack/>
            <a href='' className=''>
            مكملات
            </a>
        </div>
        <div className='flex flex-row '>
            <ArrowDownBlack/>
            <a href='' className=''>
            الكترونيات
            </a>
        </div>
        <div className=''>
            <a href='' className=''>
            العصي الخفيفة
            </a>
        </div>
        <div className=''>
            <a href='' className=''>
            العلامات التجاريه
            </a>
        </div>

        <div className=''>
            <a href='' className=''>
            تتبع الطلب
            </a>
        </div>
     
      
     
   
      
        
    </div>
    </>
    
  )
}
