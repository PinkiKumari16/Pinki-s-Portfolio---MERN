import React, { useState } from "react";
import { TitlesName } from "../../components/TitlesName";
import { coursesData } from "../../resources/coursesData";

export const Courses = () => {
  const [selecetedCourseIndex, setSelectedCourseIndex] = useState(0);
  return (
    <div className="lg:mt-15 px-5">
      <TitlesName title="Courses" />
      <div className="flex flex-col lg:flex-row gap-10 lg:justify-around">
        <div className="flex flex-row overflow-x-scroll lg: overflow-x-hidden lg:flex-col gap-5 border-l-3 text-[#044150]">
          {coursesData.map((course, index) => (
            <h1
              className={`px-5 py-2 cursor-pointer ${
                selecetedCourseIndex === index ? 
                "text-tertiary border-l-5" :
                "text-white"
              }`}
              onClick={() => setSelectedCourseIndex(index)}
            >
              {course.title}
            </h1>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 lg:w-3/5">
          <div className="md:w-1/2 lg:w-2/3">
            <h1 className="text-secondry text-3xl py-5 font-semibold">
              {coursesData[selecetedCourseIndex].title}
            </h1>
            <p className="text-white">
              {coursesData[selecetedCourseIndex].description}
            </p>
          </div>
          <div
            className="h-[70vh] w-full md:w-[50vw] lg:h-[55vh] lg:w-[30vw] bg-cover bg-center"
            style={{
              backgroundImage: `url(${coursesData[selecetedCourseIndex].image})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
