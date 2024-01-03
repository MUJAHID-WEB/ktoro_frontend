import Image from 'next/image'
import { Inter } from 'next/font/google'
import {HomePage} from '@/components/Home/HomePage'
import { ItemPage } from '@/components/ItemPage/ItemPage'
import { CallUs } from '@/components/CallUs/CallUs'
import { HelpPage } from '@/components/HelpPage/HelpPage'

const inter = Inter({ subsets: ['latin'] })


const Home = () =>  {
  return (
   <div>
    {/* <HomePage/> */}
    {/* <ItemPage /> */}
    {/* <CallUs /> */}
    <HelpPage />
    
   </div>
  )
}

export default Home