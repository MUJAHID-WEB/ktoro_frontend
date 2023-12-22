import Image from 'next/image'
import { Inter } from 'next/font/google'
import {HomePage} from '@/components/Home/HomePage'

const inter = Inter({ subsets: ['latin'] })


const Home = () =>  {
  return (
   <div>
    <HomePage/>
   </div>
  )
}

export default Home