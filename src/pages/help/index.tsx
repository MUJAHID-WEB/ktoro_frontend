import React, { ReactNode } from 'react'
import { UpperHeader } from '../../components/Header/UpperHeader';
import { LowerHeader } from '../../components/Header/LowerHeader';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { HowCanHelp } from '../../components/HelpPage/HowCanHelp';
import { AboutKtoro } from '../../components/HelpPage/AboutKtoro';

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

export default HelpPage




