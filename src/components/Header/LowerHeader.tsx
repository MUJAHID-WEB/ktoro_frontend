import Link from 'next/link'
import LogoWhite from '../svg/LogWhite'

import React from 'react'
import Cart from '../svg/Cart'
import User from '../svg/User'
import Search from '../svg/Search'

export default function LowerHeader() {
    return (
        <>
            <div className='w-full flex flex-row justify-between bg-[#333333] text-[#E7E7E7] py-6 px-[100px]'>

                <div className='flex flex-row items-center'>

                    {/* Shopping Cart */}
                    <div className='flex flex-row border-r'>
                        <p className=''>سله المشتريات</p>
                        <Cart />
                    </div>

                    {/* User */}
                    <div className='flex flex-row '>
                        <p className=''>حسابي</p>
                        <User />
                    </div>
                </div>





                {/* Search Box */}
                <div className='flex flex-row bg-[#404040] rounded-[50px] items-center '>
                    <input type='text' placeholder='عن ماذا تبحث ؟' className='bg-[#404040] text-right rounded-[50px] w-[654px]' />
                    <Search />
                </div>


                {/* KTORO Logo*/}
                <div className='h-[56px] w-[204.12]'>
                    <Link href={'/'} className=''>
                        <LogoWhite />
                    </Link>
                </div>

            </div>





        </>

    )
}

