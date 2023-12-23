import React from 'react'
import Image from 'next/image'
import Sms from '../svg/Sms'

export const Footer = () => {
  return (
    <>
      <section className='bg-[#FFFF]  pt-[60px]'>

        <div className='container flex flex-row justify-start items-start gap-[120px]'>

          {/* Column 01 */}
          <div className='flex flex-col items-end justify-end'>
            <h3 className='text-[#242424] font-bold'>اشترك في رسائل البريد الإلكتروني</h3>
            <p className='text-[#494949]'>احصل على أحدث عروضنا وأخبارنا مباشرة في بريدك الوارد</p>

            <div className='flex flex-row items-start justify-start gap-4 pt-4 '>
            <button className='bg-[#333] text-[#FFFF] px-6 py-[14px] rounded-md'>
                ارسال
              </button>
              
              <input type='text' placeholder='البريد الالكتروني' className='text-[#3333] bg-[#F4F4F4] text-right w-[250px] p-[14px] rounded-sm' />
              <Sms />
             
            </div>

          </div>

           {/* Column 02 */}
           <div className='flex flex-col items-end justify-end'>
            <h3 className='text-[#242424] font-bold'>اشترك في رسائل البريد الإلكتروني</h3>
            <p className='text-[#494949]'>احصل على أحدث عروضنا وأخبارنا مباشرة في بريدك الوارد</p>

            <div className='flex flex-row items-start justify-start gap-4 pt-4 '>
            <button className='bg-[#333] text-[#FFFF] px-6 py-[14px] rounded-md'>
                ارسال
              </button>
              
              <input type='text' placeholder='البريد الالكتروني' className='text-[#3333] bg-[#F4F4F4] text-right w-[250px] p-[14px] rounded-sm' />
              <Sms />
             
            </div>

          </div>

           {/* Column 03 */}
           <div className='flex flex-col items-end justify-end'>
            <h3 className='text-[#242424] font-bold'>اشترك في رسائل البريد الإلكتروني</h3>
            <p className='text-[#494949]'>احصل على أحدث عروضنا وأخبارنا مباشرة في بريدك الوارد</p>

            <div className='flex flex-row items-start justify-start gap-4 pt-4 '>
            <button className='bg-[#333] text-[#FFFF] px-6 py-[14px] rounded-md'>
                ارسال
              </button>
              
              <input type='text' placeholder='البريد الالكتروني' className='text-[#3333] bg-[#F4F4F4] text-right w-[250px] p-[14px] rounded-sm' />
              <Sms />
             
            </div>

          </div>

           {/* Column 04 */}
           <div className='flex flex-col items-end justify-end'>
            <h3 className='text-[#242424] font-bold'>اشترك في رسائل البريد الإلكتروني</h3>
            <p className='text-[#494949]'>احصل على أحدث عروضنا وأخبارنا مباشرة في بريدك الوارد</p>

            <div className='flex flex-row items-start justify-start gap-4 pt-4 '>
            <button className='bg-[#333] text-[#FFFF] px-6 py-[14px] rounded-md'>
                ارسال
              </button>
              
              <input type='text' placeholder='البريد الالكتروني' className='text-[#3333] bg-[#F4F4F4] text-right w-[250px] p-[14px] rounded-sm' />
              <Sms />
             
            </div>

          </div>

         
        </div>

      </section>

    </>
  )
}
