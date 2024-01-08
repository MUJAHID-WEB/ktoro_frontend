import React from 'react'
import { Search } from '../HelpPage/HelpSvg/Search'


export const BrandSearch = () => {
    return (

        <>
            <div className='flex flex-col justify-start items-center pt-[54px]'>
                {/* Search Field */}
                <div className='flex flex-row justify-between items-center bg-white border border-[#8F8F8F]'>
                    <button className="flex items-center justify-center pl-7">
                        <Search />
                    </button>

                    <input type='text' placeholder='ابحث عن البرندات هنا ' className='py-2 pr-7 w-[650px] text-right' />

                </div>

                {/* Search by Letter */}
                <div className='flex flex-row-reverse justify-start items-center gap-10 py-7 px-6'>
                    <button className='bg-[#333] rounded-md py-2 px-6 text-[#FFF] font-bold text-base'>
                        كل البرندات
                    </button>

                    {/* Letter Button A-Z */}
                    <div className='flex flex-rowjustify-start items-center gap-4'>

                        <button className='p-2 text-[#333] font-bold text-base'>
                            A
                        </button>
                        <button className='p-2 text-[#333] font-bold text-base'>
                            B
                        </button>
                        <button className='p-2 text-[#333] font-bold text-base'>
                            C
                        </button>
                        <button className='p-2 text-[#333] font-bold text-base'>
                            D
                        </button>




                    </div>
                </div>


                <div className='my-[24px] border-t border-[#9E9E9E] w-full z-10 relative'>

                    <div className='flex justify-center items-center bg-[#333] border rounded-full w-[40px] h-[40px] absolute -top-5 left-[50%] transform -translate-x-1/2'>
                        <p className='font-normal text-base text-[#FFF] text-center'>A</p>

                    </div>

                </div>

            </div>
        </>
    )
}
