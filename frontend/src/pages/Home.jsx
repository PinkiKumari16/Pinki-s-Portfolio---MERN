import React from "react";
import { Navbar } from "../components/Navbar";
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
  const sectionsTitle = [
    "Home",
    "About",
    "Experiences",
    "Projects",
    "Courses",
    "Contact",
  ];
  return (
    <>
      {portfolioData && (
        <>
          <Navbar
            navbarTitle="Pinki's Portfolio"
            sectionsTitle={sectionsTitle}
          />
          <div className="bg-primary !w-full flex flex-col gap-20 sm:gap-15 mt-10 md:mt-12 py-5 md:py-15 lg:py-15 px-8 md:px-20 lg:px-30">
            <IntroSection />
            <AboutSection />
            <Experiences />
            <Projects />
            <Courses />
            <Contact />
            <Footer />
            <Sidebar />
          </div>
        </>
      )}
    </>
  );
};
