import React from "react";
import {SkillButton} from '../../components/SkillButton'

export const IntroSection = () => {
  return (
    <>
      <div className="h-[80vh] flex flex-col items-start px-8 sm:px-20 md:px-20 justify-center gap-8">
        <h1 className="text-white">Hii, I am</h1>
        <h1 className="text-secondry text-5xl md:text-6xl lg:text-7xl font-semibold">Pinki Kumari</h1>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold">
          I build things for the web.
        </h1>
        <p className="text-white w-full sm:w-3/4 md:w-full lg:w-1/2 xl:w-2/3 sm:text-left">
          I am Mern-stack Web Developer/Instructor. Currently I am working as a
          React Developer in India. Also sharing my knowladge to the students
          that I have gained in the carrier through online teaching across the
          world.
        </p>
        <SkillButton data='Get Started' />
      </div>
    </>
  );
};