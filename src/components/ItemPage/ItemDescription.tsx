import React from 'react'
import { ImageComponent } from '../ImageComponent'

export const ItemDescription = () => {
  return (
    <div className='flex flex-col'>

{/* Item Offers */}
      <div className='flex flex-row'>
        <ImageComponent
          className='w-[70px] h-[70px] '
          Src='/images/Item/tshirt.png'
          Alt='' />

        <div className='flex flex-col'>
          <h3 className=''>NARUTO</h3>
          <p className=''>
            لمزيد من منتجاتنا الحصرية

            <span className=''>انقر هنا</span>                      
            </p>
        </div>
      </div>
{/* Title */}
      <h2 className=''>تي شيرت مخصص للرجال وللنساء</h2>
{/* Launch Date */}
      <div className='flex flex-row'>
        <p className=''>
        تاريخ الاصدار:
          <span className=''>
          16/6/2023
          </span>
        </p>
        <div>
          <p>طلب مسبق</p>
        </div>
      </div>
{/* Description */}
      <p className=''>
      متوفرة الهدايا عند طلب في فترة الطلب المسبق
      </p>

      {/* Price */}
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <p className=''>$33.92</p>
          <span className=''>-20%</span>
        </div>
        <h3>$27.15</h3>
      </div>

      {/* Variant */}
      <div className='flex flex-row'>
      <ImageComponent
          className='w-[70px] h-[70px] '
          Src='/images/Item/tshirt.png'
          Alt='' />
           <ImageComponent
          className='w-[70px] h-[70px] '
          Src='/images/Item/tshirt.png'
          Alt='' />
           <ImageComponent
          className='w-[70px] h-[70px] '
          Src='/images/Item/tshirt.png'
          Alt='' />
      </div>

      {/* Size */}
      <div className='flex flex-col'>
        <h6 className=''>المقاس:</h6>
        <div className='flex flex-row'>
        <div className=''>XS</div>
        <div className=''>S</div>
        <div className=''>M</div>
        <div className=''>L</div>
        <div className=''>XL</div>
        </div>
      </div>

      {/* Count, Add to cart and Favorite */}
      <div className='flex flex-row gap-2'>

        <div className=''>
          1
        </div>

        <button className=''>
        أضف للسلة
        </button>

        <div className=''>

        </div>
      </div>


    </div>
  )
}
