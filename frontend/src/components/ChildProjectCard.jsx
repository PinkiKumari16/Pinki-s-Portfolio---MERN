import React from "react";
import { useNavigate } from "react-router-dom";

export const ChildProjectCard = ({ projectData }) => {
  const navigate = useNavigate();

  return (
    <div className="m-3">
      <p
        className="text-primary underline cursor-pointer"
        onClick={() => navigate("/admin?tab=4")}
      >
        Back To Projects
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center m-10 border-2 shadow-2xl border-gray-300 p-5 gap-10">
        <div>
          <img src={projectData.projectImage} alt="project image" />
        </div>
        <div className="flex flex-col">
          <h1 className="sm:text-3xl text-secondry !font-bold">
            {projectData.projectName}
          </h1>
          <p>
            <span className="font-bold">Technologyies Used: </span>
            {projectData.technology.join(", ")}
          </p>
          <p>
            <span className="font-bold">Deploy Link: </span>
            <a
              href={projectData.link}
              target="_blank"
              className="projectLink text-blue-400"
            >
              {projectData.link}
            </a>
          </p>
          <div>
            {projectData.projectDescription
              .split("Impact:")
              .map((para, index) => (
                <p key={index}>{para}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
