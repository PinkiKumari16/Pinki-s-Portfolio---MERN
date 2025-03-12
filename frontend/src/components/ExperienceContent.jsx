import React from "react";

export const ExperienceContent = ({ companyExperience }) => {
  return (
    <>
      <div className="flex flex-col gap-5 text-white sm:w-2/3">
        <h1 className="text-3xl text-secondry">
          {companyExperience.designation || " "}
        </h1>
        <strong>{companyExperience.title || " "}</strong>
        <p className>{companyExperience.description || " "}</p>
      </div>
    </>
  );
};
