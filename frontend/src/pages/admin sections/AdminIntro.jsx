import React from "react";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

export const AdminIntro = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const dispatch = useDispatch();

  const getUpdatedData = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/portfoliodata/update-intro", {
        ...values,
        _id: intro._id,
      });

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
  return (
    <div>
      <Form layout="vertical" initialValues={intro} onFinish={getUpdatedData}>
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input></Input>
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <Input></Input>
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <Input></Input>
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <Input></Input>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea></TextArea>
        </Form.Item>
        <div className="flex justify-end">
          <button className="!text-white px-10 py-2 bg-primary" type="submit">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};
