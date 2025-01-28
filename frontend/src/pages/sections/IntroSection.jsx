import React from "react";

export const IntroSection = () => {
  return (
    <>
      <div className="h-[80vh] bg-[#0A192F] flex flex-col items-start px-40 justify-center gap-8 py-10">
        <h1 className="text-white">Hii, I am</h1>
        <h1 className="text-7xl text-[#F97316] font-semibold">Pinki Kumari</h1>
        <h1 className="text-6xl text-white font-semibold">
          I build things for the web.
        </h1>
        <p className="text-white w-2/3">
          I am Mern-stack Web Developer/Instructor. Currently I am working as a
          React Developer in India. Also sharing my knowladge to the students
          that I have gained in the carrier through online teaching across the
          world.
        </p>
        <button className="border-2 text-[#54D6BB] px-5 py-3 rounded">
          Get Started
        </button>
      </div>
    </>
  );
};
