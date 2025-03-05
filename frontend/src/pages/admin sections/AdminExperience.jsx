import React, { useState } from "react";
import axios from "axios";
import { Form, Input, message, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import {
  setReloadData,
  hideLoading,
} from "../../redux/rootSlice";

export const AdminExperience = () => {
  const [isExperienceFormShow, setIsExperienceFormShow] = useState(false);
  const [selectedItemForEdit, setSelectedItemsForEdit] = useState(null)
  const { portfolioData } = useSelector(
    (state) => state.root
  );
  const { experiences } = portfolioData;
  const dispatch = useDispatch();

  const deleteExperience = async (exp_id) => {
    // console.log(exp_id);
    try {
      const response = await axios.delete(
        "/api/portfoliodata/experience-delete",
        {
          data: { _id: exp_id },
        }
      );
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(setReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error);
    }
  };

  const addAndEditExperience = async (values) => {
    try {
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfoliodata/experience-edit", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post(
          "/api/portfoliodata/experience-add",
          values
        );
      }
      if (response.data.success) {
        setSelectedItemsForEdit(null);
        setIsExperienceFormShow(false);
        dispatch(setReloadData(true));
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
      <div className="flex justify-end">
        <button
          className="!text-white font-bold py-2 px-3 bg-primary"
          onClick={() => {
            setIsExperienceFormShow(true);
          }}
        >
          Add New Experience
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-2">
        {experiences.map((exp) => (
          <div className="shadow border border-gray-400 p-5" id={exp._id}>
            <h1 className="text-xl text-primary">{exp.period}</h1>
            <hr className="text-gray-300 mb-1" />
            <p>Company Name: {exp.title}</p>
            <p>Role: {exp.designation}</p>
            <p>{exp.description}</p>
            <div className="flex justify-end gap-5">
              <button
                className="px-4 !text-white bg-red-800"
                onClick={() => deleteExperience(exp._id)}
              >
                Delete
              </button>
              <button
                className="p-1 px-5 !text-white bg-primary"
                onClick={() => {
                  setSelectedItemsForEdit(exp) // Set selected experience for editing
                  setIsExperienceFormShow(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={isExperienceFormShow}
        footer={null}
        onCancel={() => {
          setIsExperienceFormShow(false);
        }}
      >
        <h1 className="text-center">
          {selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        </h1>
        <Form
          layout="vertical"
          onFinish={addAndEditExperience}
          initialValues={selectedItemForEdit || {}}
          key={selectedItemForEdit ? selectedItemForEdit._id : "new"}
        >
          <Form.Item label="Company Name" name="title">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Period" name="period">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Designation" name="designation">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea></TextArea>
          </Form.Item>
          <div className="flex justify-end gap-5">
            <button
              className="!text-primary border !border-primary px-8 py-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsExperienceFormShow(false);
                setSelectedItemsForEdit(null);
              }}
            >
              Cencel
            </button>
            <button
              className="bg-primary px-10 py-2 !text-white cursor-pointer"
              type="submit"
            >
              {selectedItemForEdit ? "Edit" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
