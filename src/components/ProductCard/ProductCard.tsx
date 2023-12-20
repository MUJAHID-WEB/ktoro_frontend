import React from 'react'

export default function ProductCard() {
    return (
        <>
            <div className='bg-[#FFFFFF] rounded-md'>

                <div className=''>
                    {/* product image */}
                    <div className='h-[227px] w-[244px] rounded-md bg-gray p-6 relative'>


                    </div>
                    {/* offer */}
                    <div className='bg-[#F3C078] px-2 py-3 rounded-[50px] text-center absolute'>
                        <p className=''>15% خصم</p>

                    </div>
                </div>

                {/* Category, Name, Price and Discount Price */}
                <div className='text-right'>
                    <p className=''>album</p>
                    <p className=''>Bingozones B1 Bluetooth Headphones with TFcard modles Blue</p>
                    <div className='flex flex-row-reverse gap-4 '>
                        <h5 className=''>99 ر.س</h5>
                        <h6 className=''>110 ر.س</h6>
                    </div>

                </div>

                {/* Details Button */}
                <div className='border-t text-center '>
                    <p className='py-[14px]'>
                    اضف للسله  
                    </p>







                </div>



            </div>

        </>

    )
}
