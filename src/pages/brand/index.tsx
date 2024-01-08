import { BrandCard } from "@/components/Brand/BrandCard"
import { Footer } from "@/components/Footer/Footer"
import { LowerHeader } from "@/components/Header/LowerHeader"
import { UpperHeader } from "@/components/Header/UpperHeader"
import { Navbar } from "@/components/Navbar/Navbar"



const CallUs = () => {
    return (
        <>
            <div className=''>
                <UpperHeader />
                <LowerHeader />
                <Navbar />

                {/* Brand Section */}
                <BrandCard image={"/images/brand/applelogo.png"} title={"Apple"} />
                
                <Footer />
            </div>
        </>
    )
}

export default CallUs