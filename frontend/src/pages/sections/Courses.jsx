import React, { useState } from "react";
import { TitlesName } from "../../components/TitlesName";
import { useSelector } from "react-redux";

export const Courses = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData;
  const [selecetedCourseIndex, setSelectedCourseIndex] = useState(0);
  return (
    <div id="courses">
      <TitlesName title="Courses" />
      <div className="flex flex-col lg:flex-row gap-10 lg:justify-around mt-5 sm:mt-0">
        <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden lg:flex-col gap-5 border-l-3 text-[#044150]">
          {courses.map((course, index) => (
            <h1
              className={`px-5 py-2 cursor-pointer ${
                selecetedCourseIndex === index
                  ? "text-tertiary border-l-5"
                  : "text-white"
              }`}
              onClick={() => setSelectedCourseIndex(index)}
              key={course._id}
            >
              {course.courseName || " "}
            </h1>
          ))}
        </div>
        <div className="flex flex-col lg:w-3/5">
          <h1 className="text-secondry text-3xl py-5 font-semibold">
            {courses[selecetedCourseIndex].courseName || " "}
          </h1>
          <div className="flex flex-col items-center md:flex-row gap-5">
            <p className="text-white">
              {courses[selecetedCourseIndex].courseDescription || " "}
            </p>
            <img
              src={courses[selecetedCourseIndex].courseImage || " "}
              alt="course image"
              className="h-[32vh] w-6/7 md:w-[40vw] lg:w-[20vw] bg-cover bg-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
