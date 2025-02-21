import React from "react";
import { TitlesName } from "../../components/TitlesName";
import { SkillButton } from "../../components/SkillButton";
import { useSelector } from "react-redux";

export const AboutSection = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { developerImage, description1, description2, skills } = about;

  return (
    <div id="about">
      <TitlesName title="About Me" />
      <div className="flex flex-col items-center gap-7 sm:gap-15 justify-center sm:flex-row sm:p-10 md:p-1">
        <div
          className="h-[55vh] w-[80vw] sm:h-[60vh] sm:w-[30vw] bg-cover bg-center"
          style={{
            backgroundImage: `url(${developerImage})`,
          }}
        ></div>
        <div className="flex flex-col px-5 gap-10 sm:w-1/2 sm:p-0 md:gap-5 md:w-2/3 md:text-[14px] lg:gap-10 lg:text-[18px] text-white">
          <p>{description1 || " "}</p>
          <p>{description2 || " "}</p>
        </div>
      </div>
      <div className="py-10 ml-5 sm:ml-20 md:ml-2">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-5 mt-5">
          {skills.map((skill) => (
            <SkillButton data={skill} className="text-white" />
          ))}
        </div>
      </div>
    </div>
  );
};
