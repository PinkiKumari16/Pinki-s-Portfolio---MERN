import React from "react";
import { SkillButton } from "../../components/SkillButton";
import { useSelector } from "react-redux";

export const IntroSection = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { welcomeText, caption, description, firstName, lastName } = intro;
  return (
    <div
      className="h-[80vh] flex flex-col items-start justify-center gap-8 mt-20 sm:mt-0"
      id="intro"
    >
      <h1 className="text-white">{welcomeText || ""}</h1>
      <h1 className="text-secondry text-5xl md:text-6xl lg:text-7xl font-semibold">
        {firstName || " "} {lastName || " "}
      </h1>
      <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold">
        {caption || " "}
      </h1>
      <p className="text-white w-full sm:w-3/4 md:w-full lg:w-1/2 xl:w-2/3 sm:text-left">
        {description || " "}
      </p>
      <SkillButton data="Get Started" />
    </div>
  );
};
