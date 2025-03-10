import React from "react";
import { Form, Input, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showLoading, hideLoading } from "../../redux/rootSlice";

export const AdminContact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const dispatch = useDispatch();

  const editContactData = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/portfoliodata/contact-update", {
        _id: contact._id,
        ...values,
      });
      if (response.data.success) {
        dispatch(hideLoading());
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
      dispatch(hideLoading());
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <div>
      <Form
        layout="vertical"
        initialValues={contact}
        onFinish={editContactData}
      >
        <Form.Item label="Name" name="name">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Age" name="age">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Mobile" name="mobile">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Country" name="country">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Contact Image URL" name="contactImage">
          <Input></Input>
        </Form.Item>
        <div className="flex justify-end">
          <button className="!text-white bg-primary px-10 py-2" type="submit">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};
