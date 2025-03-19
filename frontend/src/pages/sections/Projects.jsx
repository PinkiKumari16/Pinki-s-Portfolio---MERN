import React, { useState } from "react";
import { TitlesName } from "../../components/TitlesName";
import { useSelector } from "react-redux";

export const Projects = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [projectIndex, setProjectIndex] = useState(0);
  return (
    <div id="projects">
      <TitlesName title="project" />
      <div className="flex flex-col lg:flex-row gap-15 mt-5 sm:mt-0">
        <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden lg:flex-col gap-5 border-l-3 text-[#044150] text-sm lg:text-[18px]">
          {projects.map((project, index) => (
            <h1
              className={`pl-5 py-2 pr-0 cursor-pointer ${
                projectIndex === index
                  ? "text-tertiary border-l-5"
                  : "text-white"
              }`}
              onClick={() => setProjectIndex(index)}
            >
              {project.projectName || " "}
            </h1>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 lg:w-7/10">
          <img
            src={projects[projectIndex].projectImage || " "}
            alt="course image"
            className="h-[45vh] w-6/7 md:w-[30vw] lg:w-[20vw] bg-cover bg-center"
          />
          <div className="md:w-1/2 lg:w-2/3">
            <h1 className="text-secondry text-3xl py-3 font-semibold">
              {projects[projectIndex].projectName || " "}
            </h1>
            <div className="font-semibold">
              {projects[projectIndex].technology.map((technologyUsed) => (
                <span className="text-white">{technologyUsed + ", "}</span>
              ))}
            </div>
            <p className="text-white !mt-4">
              {projects[projectIndex].projectDescription || " "}
            </p>
            {/* <p className="text-white">
              {projects[projectIndex].courseDescription || " "}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
