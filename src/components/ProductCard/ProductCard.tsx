import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export const ProductCard = () => {
    return (
        <>
            <Link href=''>
                <div className='bg-[#FFFFFF] w-[292px] rounded-md p-6 pb-0'>


                    <div className=''>
                        {/* product image */}
                        <div className='aspect-[244/227] rounded-md bg-[#f4f4f4] relative'>
                            <Image
                                src="/images/product/01.png"
                                className=''
                                alt="Product Image"
                                fill={true}
                            />

                            {/* offer */}
                            <div className='bg-[#F3C078] px-3 py-2  rounded-[50px] text-center absolute z-10 -top-[14px] -right-3'>
                                <p className='rtl'>15% خصم</p>

                            </div>
                        </div>

                    </div>



                    {/* Category, Name, Price and Discount Price */}
                    <div className='text-right py-4'>
                        <p className=''>album</p>
                        <p className=''>Bingozones B1 Bluetooth Headphones with TFcard modles Blue</p>
                        <div className='flex flex-row-reverse gap-4 '>
                            <h4 className=''>99 ر.س</h4>

                            <h6 className='text-[#7777]'>110 ر.س


                            </h6>

                        </div>

                    </div>

                    {/* Details Button */}
                    <div className='border-t border-[#F4F4F4] text-center '>
                        <button className='py-[14px] text-[#2B8DC5]'>
                            اضف للسله
                        </button>
                    </div>



                </div>
            </Link>
        </>

    )
}
