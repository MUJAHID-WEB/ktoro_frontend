'use client'
import React, { useState } from 'react'
import ArrowDown from '../svg/ArrowDown'
import Sms from '../svg/Sms'
import Calling from '../svg/Calling'
import ArabicFlag from '../svg/ArabicFlag'



export default function UpperHeader() {

  const [selectedLanguage, setSelectedLanguage] = useState('ar');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربيه' },
    // More languages
  ];

  const handleChangeLanguage = (event: any) => {
    setSelectedLanguage(event.target.value);
    // You should put this into a context so the whole app will be able to access it and avoid prop drilling
  };

  return (
    <>
      <div className='w-full flex flex-row justify-between bg-[#3D3D3D] text-[#FFFFFF] py-3 px-[100px]'>

        {/* Language Selection */}
        <div className='flex flex-row '>
          <ArrowDown />
          <select value={selectedLanguage} onChange={handleChangeLanguage} className='appearance-none bg-transparent border-none '>
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                
                {language.name}
                
              </option>
            ))}
          </select>
          {/* <ArrowDown />
            <p className=''>العربيه</p>
            <ArabicFlag /> */}
        </div>

        {/* Support mail */}
        <div className='flex flex-row '>
          <p className=''>support@domainstore.com</p>
          <Sms />
        </div>

        {/* Phone Number */}
        <div className='flex flex-row '>
          <p className=''>+96658574785</p>
          <Calling />
        </div>


      </div>
    </>

  )
}




