import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="flex p-5 text-[#fff] bg-primary lg:text-2xl justify-between fixed left-0 top-0 w-full">
        <h1>Pinki's Portfolio</h1>
        <div className="flex text-sm lg:text-lg gap-5 text-tertiary pointer">
          <a href="#intro">Home</a>
          <a href="#about">About</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Projects</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </>
  );
};
