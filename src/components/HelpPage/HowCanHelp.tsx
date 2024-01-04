import React, { ReactNode } from 'react'
import { Wallet } from './HelpSvg/Wallet';
import { AboutKtoro } from './HelpSvg/AboutKtoro';
import { Account } from './HelpSvg/Account';
import { Orders } from './HelpSvg/Orders';
import { Payment } from './HelpSvg/Payment';
import { Shipment } from './HelpSvg/Shipment';
import { OrderIssues } from './HelpSvg/OrderIssues';
import { Search } from './HelpSvg/Search';

export const HowCanHelp = () => {
    return (
        <div className='bg-[#f4f4f4] flex flex-col justify-center items-center px-[20px] rtl'>
            <div className='flex flex-col py-[40px] justify-center items-center'>
                <h3 className='pb-6 font-medium text-[32px] text-[#333]'>
                    أهلا أحمد، كيف يمكننا أن نساعدك؟                        </h3>

                <div className='w-[80%] flex flex-row items-center bg-white rounded-md px-5 mb-[40px]'>
                    <Search />
                    <input type='text' placeholder='ما الذي تحتاج المساعدة به ؟ ' className='py-[18px] pr-3 font-normal text-base text-[#757575]' />
                </div>

                <p className='font-normal text-xl text-[#757575] pb-6'>اختر فئة للعثور بسرعة على المساعدة التي تحتاجها.</p>

                <div className='flex flex-row gap-4'>

                    <HelpCard image={<AboutKtoro />} title='عن كيتورو' />

                    <HelpCard image={<Account />} title=' حسابي' />

                    <HelpCard image={<Orders />} title='الطلبات المؤكدة' />

                    <HelpCard image={<Payment />} title='الدفع والقسائم' />

                    <HelpCard image={<Wallet />} title='رصيد المحفظة' />

                    <HelpCard image={<Shipment />} title='الشحن والتوصيل' />

                    <HelpCard image={<OrderIssues />} title='مشاكل الطلبات' />

                </div>
            </div>
        </div>

    )
}



export const HelpCard = ({ image, title }: { image: ReactNode; title: string; }) => {
    return (


        <div className='flex flex-col justify-start items-center p-6 bg-white hover:border-2 border-[#47A6DC] rounded-md w-[163px]'>
            <div className='bg-[#F1F1F2] w-[75px] h-[75px] rounded-[50px] flex items-center justify-center'>
                {image}
            </div>
            <h5 className='pt-3 font-normal text-lg text-[#494949] '>{title}</h5>


        </div>

    )
}