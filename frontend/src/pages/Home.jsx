import React from "react";
// import { Navbar } from '../components/Navbar'
import { IntroSection } from "./sections/IntroSection";
import { AboutSection } from "./sections/AboutSection";
import { Experiences } from "./sections/Experiences";
import { Projects } from "./sections/Projects";
import { Courses } from "./sections/Courses";
import { Contact } from "./sections/Contact";
import { Footer } from "../components/Footer";
import { Sidebar } from "./sections/Sidebar";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <>
      {portfolioData && (
        <div className="bg-primary flex flex-col gap-25 sm:gap-20 mt-15 py-5 md:py-15 lg:py-5 px-8 md:px-20 lg:px-30">
          <IntroSection />
          <AboutSection />
          <Experiences />
          <Projects />
          <Courses />
          <Contact />
          <Footer />
          <Sidebar />
        </div>
      )}
    </>
  );
};
