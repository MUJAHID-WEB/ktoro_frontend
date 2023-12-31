import React from 'react'
import { ImageComponent } from '../ImageComponent'

export const ItemImage = () => {
    return (
        <div className='flex flex-col w-[50%] justify-start items-center border border-[#E7E7E7] rounded-[6px] gap-4 p-6'>
            
                <ImageComponent
                    className='w-full aspect-[589/564] border border-[#E7E7E7] rounded-[6px]'
                    Src='/images/Item/tshirt.png'
                    Alt='' />


      
            <div className='flex flex-row gap-3'>
                <ImageComponent
                    className='w-[70px] h-[70px] '
                    Src='/images/Item/itemVari.png'
                    Alt='' />
                 <ImageComponent
                    className='w-[70px] h-[70px] '
                    Src='/images/Item/itemVari.png'
                    Alt='' />
                     <ImageComponent
                    className='w-[70px] h-[70px] '
                    Src='/images/Item/itemVari.png'
                    Alt='' />

            </div>
        </div>
    )
}
