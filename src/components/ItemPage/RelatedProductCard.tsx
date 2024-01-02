import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AddIcon } from './ItemSvg/AddIcon'
import { Favourite } from './ItemSvg/Favourite'
import { ItemFavouriteUnselected } from './ItemSvg/ItemFavouriteUnselected'
import { Star } from './ItemSvg/Star'


export const RelatedProductCard = () => {
    return (
        <>
            <Link href=''>
                <div className='bg-[#FFFFFF] md:w-[193px] sm:w-[180px] rounded-md md:pt-[6px] sm:pt-2 md:px-[10px] sm:px-[6px] md:pb-0 sm:pb-0'>
                    <div className=''>
                        {/* product image */}
                        <div className='md:aspect-[173/170] sm:aspect-[156/150] rounded-md relative'>
                            <Image
                                src="/images/item/02.png"
                                className=''
                                alt="Product Image"
                                fill={true}
                            />
                            {/* offer */}
                            <div className='bg-[#16AD64] md:px-3 md:py-2 sm:px-[10px] sm:py-[6px]  rounded-[50px] text-center absolute z-10 md:top-0 md:right-0 sm:top-0 sm:right-0 font-normal md:text-sm sm:text-xs'>
                                <p className=''>جديد</p>

                            </div>
                        </div>
                    </div>

                    {/* Category, Name, Price and Discount Price */}
                    <div className='text-right md:py-[10px] sm:py-[6px] font-normal md:text-xs sm:text-xs'>
                        <h3 className='font-bold text-[#7777]'>شامبو</h3>
                        <h3 className='font-medium text-[#242424] leading-6'>شامبو إنتيا للأطفال، أشقر، 250 مل</h3>

                        <div className='flex flex-row items-center gap-1 py-1'>
                            <p className='font-normal text-xs text-[#333]'>(145)</p>
                            <p className='font-normal text-xs text-[#F6CA37]'>5</p>
                            <Star />


                        </div>

                        <div>
                            <p className='font-normal text-[9px] text-[#777]'>SAR125</p>


                            <div className='flex flex-row items-center md:gap-4 sm:gap-[10px]'>
                            <h4 className='text-[#2B8DC5] md:text-sm sm:text-base'>SAR 95</h4>
                                <h6 className='text-[#2B8DC5] md:text-[10px] sm:text-xs py-[6px] px-[4px] bg-[#2B8DC5]/[.20] rounded-[3px]'>-24%
                                </h6>
                                


                            </div>
                        </div>
                    </div>

                    {/* Details Button */}
                    <div className='border-t border-[#F4F4F4] text-center flex flex-row justify-between md:py-[7px] sm:py-[5px]'>
                        <button>
                            <ItemFavouriteUnselected />
                        </button>

                        <button className=' text-[#2B8DC5] font-medium text-sm'>
                            أضافه الي العربه
                        </button>

                        <button>
                            <AddIcon />
                        </button>
                    </div>

                </div>
            </Link>
        </>

    )
}
