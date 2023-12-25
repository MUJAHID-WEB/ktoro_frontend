import React from 'react'
import {LowerHeader} from '../Header/LowerHeader'
import {UpperHeader} from '../Header/UpperHeader'
import {Navbar} from '../Navbar/Navbar'
import {Banner} from './Banner'
import {ProductSection} from './ProductSection'
import {AddsOne} from './AddsOne'
import { AddsTwo } from './AddsTwo'
import { AddsThree } from './AddsThree'
import { ProductSectionTwo } from './ProductSectionTwo'
import { AddsFour } from './AddsFour'
import { AdsFive } from './AdsFive'
import { AdsSix } from './AdsSix'
import { Footer } from '../Footer/Footer'


export const HomePage = () =>  {
  return (
    <div className=''> 
        <UpperHeader />
        <LowerHeader />
        <Navbar />
        <Banner />
        <ProductSection sectionTitle={'طلب مسبق'} sectionUrl={'/'} />
        <AddsOne />

       <ProductSection sectionTitle={'وصل حديثا '} sectionUrl={'/'} />
        <AddsTwo adsImage={'/images/product/01.png'} adsAlt={"Album"} />

        <ProductSection sectionTitle={'وصل حديثا '} sectionUrl={'/'} />
        <AddsThree />

        <ProductSection sectionTitle={'الاكثر مبيعا'} sectionUrl={'/'} />
        <div></div>
        <ProductSectionTwo />

        <AddsFour />

        <ProductSection sectionTitle={'الاكثر مبيعا'} sectionUrl={'/'} />
        <AddsTwo adsImage={'/images/product/01.png'} adsAlt={"k-food"}/>

        <ProductSection sectionTitle={'الاكثر مبيعا'} sectionUrl={'/'} />
        <AdsFive />

        <ProductSection sectionTitle={'الاكثر مبيعا'} sectionUrl={'/'} />
        <AdsSix />

        <ProductSection sectionTitle={'الاكثر مبيعا'} sectionUrl={'/'} />
        <AddsTwo adsImage={'/images/product/01.png'} adsAlt={"BT21"}/>

        <ProductSection sectionTitle={'وصل حديثا'} sectionUrl={'/'} />
        <Footer />


    </div>
  )
}
