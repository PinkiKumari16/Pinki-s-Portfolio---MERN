import { useState } from "react";
import { TitlesName } from "../../components/TitlesName";
import { experienceData } from "../../resources/experienceData";
import { ExperienceContent } from "../../components/ExperienceContent";

export const Experiences = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [companyExperience, setCompanyExperience] = useState(
    experienceData[selectedIndex]
  );

  const handleCompanyData = (expData, index) => {
    setSelectedIndex(index);
    setCompanyExperience(expData);
  };

  return (
    <div>
      <TitlesName title="Experiences" />
      <div className="flex flex-col gap-12 md:justify-around md:flex-row md:items-center sm:mt-10">
        <div className="flex md:flex-col overflow-x-scroll md:overflow-hidden gap-8 sm:border-l-2 border-[#135e4c82]">
          {experienceData.map((expData, index) => (
            <h1
              onClick={() => {
                handleCompanyData(expData, index);
              }}
              className={`sm:px-8 py-2 text-1xl sm:rounded cursor-pointer ${
                selectedIndex === index
                  ? "font-semibold text-tertiary sm:border-l-4 border-b-2 sm:border-b-0 bg-[#1a7f5a31]"
                  : "text-white"
              }`}
              
            >
              {expData.period}
            </h1>
          ))}
        </div>
        <ExperienceContent companyExperience={companyExperience} />
      </div>
    </div>
  );
};
