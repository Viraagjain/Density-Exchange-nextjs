import { Inter } from 'next/font/google'
import TextMsg from '@/Components/textmessage'
import EQ from '@/Components/eqBeats'
import Slider from '@/Components/slider'
import Slider2 from '@/Components/slider2'
import Text2Message from '@/Components/text2'
import OpenVacanciesSection from '@/Components/vacancies'
import Slider3 from '@/Components/slider3'
import Footer from '@/Components/footer'
import Animation from '@/Components/animation'
import RecordedVideo from '@/Components/video'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
         <RecordedVideo/>

     <TextMsg/>
     <Animation/>
     <EQ/>
     
     <Slider/>
     <Slider2/>
     <Text2Message/>
     
     <Slider3/>
     <OpenVacanciesSection/>
     <Footer/>
    </>
  )
}
