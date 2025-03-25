import React, { useState } from "react";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showLoading, hideLoading } from "../../redux/rootSlice";
import { message } from "antd";

export const AdminAbout = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { about } = portfolioData;
  const [imageDeveloperPinki, setImageDeveloperPinki] = useState(
    about.developerImage
  );

  const getAboutData = async (values) => {
    const tempSkills = values.skills.split(",");
    values.skills = tempSkills;
    values.developerImage = imageDeveloperPinki;

    try {
      dispatch(showLoading());
      const response = await axios.post("/api/portfoliodata/update-about", {
        _id: about._id,
        ...values,
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
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const convertedImage = await convertToBase64(file);
    // console.log(convertedImage);
    setImageDeveloperPinki(convertedImage);
  };
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={getAboutData}
        initialValues={{
          ...about,
          skills: about.skills.join(", "),
        }}
      >
        <Form.Item label="Developer Image URL">
          <div className="flex w-1/4 items-center">
            <img
              src={imageDeveloperPinki}
              alt="developer image"
              className="w-35"
            />
            <p
              onClick={() => document.getElementById("selectedImage").click()}
              className="cursor-pointer"
            >
              Choose the file
            </p>
          </div>
          <Input
            type="file"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => handleFileUpload(e)}
            className="!hidden"
            id="selectedImage"
          ></Input>
        </Form.Item>
        <Form.Item name="description1" label="Description 1">
          <TextArea></TextArea>
        </Form.Item>
        <Form.Item name="description2" label="Description 2">
          <TextArea></TextArea>
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <Input></Input>
        </Form.Item>
        <div className="flex justify-end">
          <button type="submit" className="px-10 py-2 !text-white bg-primary">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
