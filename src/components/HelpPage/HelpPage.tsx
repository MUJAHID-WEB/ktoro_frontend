import React, { ReactNode } from 'react'
import { UpperHeader } from '../Header/UpperHeader';
import { LowerHeader } from '../Header/LowerHeader';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { HowCanHelp } from './HowCanHelp';
import { AboutKtoro } from './AboutKtoro';

export const HelpPage = () => {
    return (
        <>
            <div className='bg-[#F9FAFB]'>
                <UpperHeader />
                <LowerHeader />
                <Navbar />

                {/* How Can We Help You? */}
                <HowCanHelp />

                {/* About Ktoro */}
                <AboutKtoro />

                <Footer />
            </div>
        </>
    )
}




