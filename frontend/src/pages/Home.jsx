import React from 'react'
// import { Navbar } from '../components/Navbar'
import { IntroSection } from './sections/IntroSection'
import { AboutSection } from './sections/AboutSection'


export const HomePage = () => {
  return (
    <>
      <div className='bg-primary flex flex-col gap-30 sm:gap-10 py-20 sm:p-10'>
        <IntroSection />
        <AboutSection />
      </div>
     
    </>
  )
}
