import React from 'react'
import { ImageComponent } from '../ImageComponent'
import { Favourite } from './ItemSvg/Favourite'
import { DownIcon } from './ItemSvg/DownIcon'

export const ItemDescription = () => {
  return (
    <div className='flex flex-col'>

      {/* Item Offers */}
      <div className='flex flex-row justify-start items-center bg-[#12A8E0]/[0.1] w-[471px]'>
        <div className='px-3 py-[6px]'>
          <ImageComponent
            className='w-[100px] h-[70px] '
            Src='/images/Item/naruto.png'
            Alt='Naruto' />
        </div>
        <div className='flex flex-col'>
          <h3 className='font-medium text-xl text-[#2B8DC5]'>NARUTO</h3>
          <p className='font-normal text-base text-[#777]'>
            لمزيد من منتجاتنا الحصرية،
            <span className='font-bold text-base text-[#16AD64]'>انقر هنا</span>
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className='font-normal text-2xl text-[#242424]'>تي شيرت مخصص للرجال وللنساء</h2>
      {/* Launch Date */}
      <div className='flex flex-row items-center font-normal text-base pt-[9px]'>
        <p className='text-[#777]'>
          تاريخ الاصدار:
          <span className='text-[#2B8DC5]'>
            16/6/2023
          </span>
        </p>

        <p className='bg-[#E7F6FC] rounded-md mr-4 px-[10px] py-[8px]'>طلب مسبق</p>

      </div>
      {/* Description */}
      <p className='font-normal text-base text-[#777] py-[18px]'>
        متوفرة الهدايا عند طلب في فترة الطلب المسبق
      </p>

      {/* Price */}
      <div className='flex flex-col font-normal'>
        <div className='flex flex-row items-center pt-[18px]'>
          <p className='text-lg text-[#777]'>$33.92</p>
          <span className='p-[5px] bg-[#DB1D1D]/[.25] text-sm text-[#DB1D1D] mr-[13px] rounded-md'>-20%</span>
        </div>
        <h3 className='font-bold text-[40px] text-[#16AD64] py-2'>$27.15</h3>
      </div>

      {/* Variant */}
      <div className='flex flex-row py-6 gap-2'>
        <button>
          <ImageComponent
            className='w-[60px] h-[60px] hover:border-2 border-[#2B8DC5] rounded-md'
            Src='/images/Item/tshirt.png'
            Alt='' />
        </button>
        <button>
          <ImageComponent
            className='w-[60px] h-[60px] hover:border-2 border-[#2B8DC5] rounded-md'
            Src='/images/Item/tshirt.png'
            Alt='' />
        </button>
        <button>
          <ImageComponent
            className='w-[60px] h-[60px] hover:border-2 border-[#2B8DC5] rounded-md'
            Src='/images/Item/tshirt.png'
            Alt='' />
        </button>
      </div>

      {/* Size */}
      <div className='flex flex-col font-normal text-base'>
        <h6 className='text-[#252525] pb-3'>المقاس:</h6>
        <div className='flex flex-row pb-[49px]'>
          <button className='text-[#494949] p-[10px] border border-[#F4F4F4] rounded-s-md hover:bg-[#2B8DC5] hover:text-white'>XS</button>
          <button className='text-[#494949] p-[10px] border border-[#F4F4F4] hover:bg-[#2B8DC5] hover:text-white'>S</button>
          <button className='text-[#494949] p-[10px] border border-[#F4F4F4] hover:bg-[#2B8DC5] hover:text-white'>M</button>
          <button className='text-[#494949] p-[10px] border border-[#F4F4F4] hover:bg-[#2B8DC5] hover:text-white'>L</button>
          <button className='text-[#494949] p-[10px] border border-[#F4F4F4] rounded-e-md hover:bg-[#2B8DC5] hover:text-white'>XL</button>
        </div>
      </div>

      {/* Count, Add to cart and Favorite */}
      <div className='flex flex-row justify-start gap-2'>

        <div className='flex flex-row items-center bg-[#F4F4F4] border border-[#E7E7E7] rounded-md'>
          <div className='px-[6px]'>
            <DownIcon />
          </div>
          <div className='bg-white p-[10px] rounded-md mx-[6px]'>1</div>

        </div>

        <button className='w-[300px] border border-[#2B8DC5] bg-[#2B8DC5] rounded-md font-normal text-xl text-white'>
          أضف للسلة
        </button>

        <button className=''>
          <Favourite />

        </button>
      </div>


    </div>
  )
}
