import React from 'react'
import LowerHeader from '../Header/LowerHeader'
import UpperHeader from '../Header/UpperHeader'
import Navbar from '../Navbar/Navbar'
import Banner from './Banner'
import ProductSection from './ProductSection'
import AddsOne from './AddsOne'

export default function HomePage() {
  return (
    <div className=''> 
        <UpperHeader />
        <LowerHeader />
        <Navbar />
        <Banner />
        <ProductSection />
        <AddsOne />
       

    </div>
  )
}
