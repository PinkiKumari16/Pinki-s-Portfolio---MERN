import React from 'react'
import { Navbar } from '../components/Navbar'
import { IntroSection } from './sections/IntroSection'
import { AboutSection } from './sections/AboutSection'


export const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#0A192F] flex flex-col gap-10 py-10'>
        <IntroSection />
        <AboutSection />
      </div>
     
    </>
  )
}
