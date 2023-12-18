import Link from 'next/link'
import LogoWhite from '../svg/LogWhite'

import React from 'react'
import Cart from '../svg/Cart'
import User from '../svg/User'
import Search from '../svg/Search'

export default function LowerHeader() {
    return (
        <>
            <div className='w-full flex flex-row justify-between'>

                <div className='flex flex-row '>

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
                <div className='flex flex-row '>
                    <input type='text' placeholder='عن ماذا تبحث ؟' className='' />
                    <Search />
                </div>

                {/* KTORO Logo*/}
                <div className=''>
                    <Link href={'/'} className=''>
                        <LogoWhite />
                    </Link>
                </div>

            </div>





        </>

    )
}

