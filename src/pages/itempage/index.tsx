import { Footer } from '@/components/Footer/Footer'
import { LowerHeader } from '@/components/Header/LowerHeader'
import { UpperHeader } from '@/components/Header/UpperHeader'
import { ItemPageSection } from '@/components/ItemPage/ItemPageSection'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'


const ItemPage = () => {
    return (
        <>
            <div className=''>
                <UpperHeader />
                <LowerHeader />
                <Navbar />

                {/* Item Page Section */}
                <ItemPageSection />

                <Footer />
            </div>
        </>


    )
}

export default ItemPage
