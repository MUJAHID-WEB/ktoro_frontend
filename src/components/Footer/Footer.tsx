import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmsBlack } from '../svg/SmsBlack'
import { CallingBlack } from '../svg/CallingBlack'
import { Twitter } from '../svg/Twitter'
import { Facebook } from '../svg/Facebook'
import { Instagram } from '../svg/Instagram'

export const Footer = () => {
  return (
    <>
      <section className='bg-[#FFFF]  pt-[60px]'>

        <div className='container flex flex-col '>

          <div className='flex flex-row justify-start items-start gap-[110px] pb-6'>

            {/* Column 01 */}
            <div className='flex flex-col items-end justify-end gap-4'>
              <h3 className='text-[#242424] font-bold'>اشترك في رسائل البريد الإلكتروني</h3>
              <p className='text-[#494949]'>احصل على أحدث عروضنا وأخبارنا مباشرة في بريدك الوارد</p>

              <div className='flex flex-row items-start justify-start gap-4'>
                <button className='bg-[#333] text-[#FFFF] px-6 py-[14px] rounded-md'>
                  ارسال
                </button>

                <input type='text' placeholder='البريد الالكتروني' className='text-[#3333] bg-[#F4F4F4] text-right w-[200px] p-[14px] rounded-sm' />
                <SmsBlack />

              </div>

            </div>

            {/* Column 02 */}
            <div className='flex flex-col items-end justify-end gap-4'>
              <h3 className='text-[#242424] font-bold'>نحن دائما هنا للمساعدة</h3>
              {/* Phone Number */}
              <div className='flex flex-row '>
                <p className=''>+96658574785</p>
                <CallingBlack />
              </div>
              {/* Support mail */}
              <div className='flex flex-row '>
                <p className=''>support@domainstore.com</p>
                <SmsBlack />
              </div>
            </div>

            {/* Column 03 */}
            <div className='flex flex-col items-end justify-end gap-4'>
              <h3 className='text-[#242424] font-bold'>روابط مهمه</h3>


              <Link href='/' className='text-[#494949]'>سله المشتريات</Link>
              <Link href='/' className='text-[#494949]'>حسابي</Link>
              <Link href='/' className='text-[#494949]'>المنتجات</Link>
              <Link href='/' className='text-[#494949]'>من نحن</Link>
              <Link href='/' className='text-[#494949]'>الشروط والاحكام</Link>


            </div>

            {/* Column 04 */}
            <div className='flex flex-col items-end justify-end gap-4 w-[252px] '>
              <Image
                src="/logo_footer.png"
                className='text-[#3333] '
                alt="Logo"

                height={60}
                width={86}
              />
              <p className='text-[#494949]'>نص مثال يمكن ان يستبدل في نفس المساحه نص مثال يمكن ان يستبدل في نفس المساحه نص مثال يمكن ان يستبدل في نفس المساحه</p>

              <div className='flex flex-row items-start justify-start gap-2 '>
                <Link href={'/'} className='p-[10px] border border-[#E7E7E7] rounded-full '> <Facebook /> </Link>
                <Link href={'/'} className='p-[10px] border border-[#E7E7E7] rounded-full '> <Twitter /> </Link>
                <Link href={'/'} className='p-[10px] border border-[#E7E7E7] rounded-full '> <Instagram /> </Link>

              </div>

            </div>


          </div>

          {/* Lower Footer */}
          <div className='border-t border-[#F4F4F4] pt-6 pb-[60px] flex flex-row justify-between items-center'>
            <div className='flex flex-row gap-3'>
              <Image
                src="/images/paymentway/apple_pay.png"
                className='text-[#3333] '
                alt="Logo"

                height={36}
                width={55}
              />
              <Image
                src="/images/paymentway/master_card.png"
                className='text-[#3333] '
                alt="Logo"

                height={36}
                width={55}
              />
              <Image
                src="/images/paymentway/cs10_mada.png"
                className='text-[#3333] '
                alt="Logo"

                height={36}
                width={55}
              />
              <Image
                src="/images/paymentway/visa.png"
                className='text-[#3333] '
                alt="Logo"

                height={36}
                width={55}
              />
            </div>
            <div>
              <p>COPYRIHGT@2022-PRESENT KTORO, INC. ALL RIGHT RESERVED</p>
            </div>


          </div>
        </div>

      </section>

    </>
  )
}
