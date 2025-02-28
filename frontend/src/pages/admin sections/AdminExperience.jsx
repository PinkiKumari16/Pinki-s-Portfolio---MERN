import React from "react";
import axios from "axios";
import { message } from "antd";
import { ExperienceForm } from "../../components/ExperienceForm";
import { useDispatch, useSelector } from "react-redux";
import { showExpForm } from "../../redux/rootSlice";

export const AdminExperience = () => {
  const { portfolioData, isExpFormShow } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const dispatch = useDispatch();

  const deleteExperience = async (exp_id) => {
    console.log(exp_id);
    try {
      const response = await axios.delete(
        "/api/portfoliodata/experience-delete",
        {
          data: { _id: exp_id },
        }
      );
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-2xl">Experiences</h1>
      <hr />
      {isExpFormShow ? <ExperienceForm /> : " "}
      <div className="flex flex-wrap gap-10 mt-10 p-5 z-[10]">
        <div
          className="flex justify-center items-center
         height-5 border-1 w-1/10"
        >
          <div
            className="flex items-center justify-center h-20 w-20 bg-gray-300 rounded-full text-6xl cursor-pointer"
            onClick={() => dispatch(showExpForm())}
          >
            +
          </div>
        </div>

        {experiences.map((exp) => (
          <div className="border-1 p-2 text-center w-4/15" id={exp._id}>
            <h1>{exp.title}</h1>
            <p className="flex justify-between">
              <span>{exp.period}</span>
              <span>{exp.designation}</span>
            </p>
            <p className="text-left">{exp.description}</p>
            <div className="flex justify-end gap-5">
              <button
                className="border-1 !text-red border-red-700 p-2 rounded-xl !text-red-700"
                onClick={() => deleteExperience(exp._id)}
              >
                Delete
              </button>
              <button className="border-1 p-2 !text-blue-800 border-blue-800 rounded-xl">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
