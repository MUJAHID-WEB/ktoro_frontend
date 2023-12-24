import React from 'react'
import ArrowDownBlack from '../svg/ArrowDownBlack'
import SquareBox from '../svg/SquareBox'


export const Navbar = () => {
    return (
        <>
            <nav className='w-full bg-[#FFFFFF] font-arabic font-normal text-base md:block sm:hidden'>

                <div className='container flex flex-row-reverse gap-8 md:gap-6 text-right py-4 bg-[#FFFFFF]'>

                    <div className='flex flex-row items-center gap-[6px] '>
                        <ArrowDownBlack />
                        <a href='' className=''>
                            جميع الفئات
                        </a>
                        <SquareBox />
                    </div>
                    <div className='flex flex-row items-center gap-[6px] '>
                        <ArrowDownBlack />
                        <a href='' className=''>
                            الموضه
                        </a>
                    </div>
                    <div className='flex flex-row items-center gap-[6px] '>
                        <ArrowDownBlack />
                        <a href='' className=''>
                            مكملات
                        </a>
                    </div>
                    <div className='flex flex-row items-center gap-[6px] '>
                        <ArrowDownBlack />
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
            </nav>

        </>

    )
}
