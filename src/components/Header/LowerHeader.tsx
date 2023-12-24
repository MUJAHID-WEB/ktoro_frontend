import Link from 'next/link'
import LogoWhite from '../svg/LogWhite'

import React from 'react'
import Cart from '../svg/Cart'
import User from '../svg/User'
import Search from '../svg/Search'
import { Menu } from '../Home/Menu'
import { LogoMobile } from '../svg/LogoMobile'


export const LowerHeader = () =>  {
    return (
        <>
        <section className='bg-[#333333] w-full sm:hidden md:block'>

             <div className='container flex flex-row justify-between items-center bg-[#333333] text-[#E7E7E7] py-6 font-arabic font-normal text-base '>

                <div className='flex flex-row items-center gap-4'>

                    {/* Shopping Cart */}
                    <div className='flex flex-row border-r pr-4 items-center gap-[6px]'>
                        <p className=''>سله المشتريات</p>
                        <Cart />
                    </div>

                    {/* User */}
                    <div className='flex flex-row items-center gap-[6px] '>
                        <p className=''>حسابي</p>
                        <User />
                    </div>
                </div>





                {/* Search Box */}
                <div className='flex flex-row bg-[#404040] rounded-[50px] items-center gap-2 py-[14px] px-6'>
                    <input type='text' placeholder='عن ماذا تبحث ؟' className='bg-[#404040] text-right rounded-[50px] xl:w-[575px] lg:w-[360px] md:w-[150px]' />
                    <Search />
                </div>


                {/* KTORO Logo*/}
                <div className='h-[56px] w-[204.12]'>
                    <Link href={'/'} className=''>
                        <LogoWhite />
                    </Link>
                </div>

            </div>
        </section>
           


        {/* Mobile Responsive */}
        <section className='bg-[#333333] w-full md:hidden sm:block'>

<div className='container flex flex-row justify-between items-center bg-[#333333] text-[#E7E7E7] py-4 font-arabic font-normal text-base '>

   <div className='flex flex-row items-center gap-4'>

       {/* Shopping Cart and User */}
       <div className='flex flex-row items-center gap-[10px]'>
         
           <Cart />
           <User />
       </div>

      
   </div>

   {/* KTORO Logo and Navbar */}
   <div className='flex flex-row items-center gap-[10px]'>

       <Link href={'/'}>
           <LogoMobile />
       </Link>

        <Menu />
   </div>

</div>
</section>





        </>

    )
}

