import { CallUsSection } from '@/components/CallUs/CallUsSection'
import { Footer } from '@/components/Footer/Footer'
import { LowerHeader } from '@/components/Header/LowerHeader'
import { UpperHeader } from '@/components/Header/UpperHeader'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'



const CallUs = () => {
    return (
        <>
            <div className=''>
                <UpperHeader />
                <LowerHeader />
                <Navbar />

                {/* Call Us Section */}
                <CallUsSection />
                
                <Footer />
            </div>
        </>
    )
}

export default CallUs
