import React from "react";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { hideExpForm } from "../redux/rootSlice";

export const ExperienceForm = () => {
  const dispatch = useDispatch();

  const addExperience = async (values) => {
    try {
      const response = await axios.post("/api/portfoliodata/experience-add", {
        ...values,
      });
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      dispatch(hideExpForm());
    }
  };
  return (
    <div className="border-2 p-5 w-1/2 z-[20] fixed left-70 bottom-0 bg-white">
      <h1 className="text-center">Add Experience</h1>
      <Form layout="vertical" onFinish={addExperience} initialValues=" ">
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
            className="bg-primary px-8 py-2 !text-white"
            onClick={() => dispatch(hideExpForm())}
          >
            Cencel
          </button>
          <button className="bg-primary px-10 py-2 !text-white" type="submit">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};
