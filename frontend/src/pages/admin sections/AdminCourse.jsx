import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Modal, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { setReloadData } from "../../redux/rootSlice";

export const AdminCourse = () => {
  const dispatch = useDispatch();
  const [isCourseFormShow, setCourseFormShow] = useState(false);
  const [seletedEditData, setSeletedEditData] = useState(null);
  const { portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData;

  const addAndEditCourse = async (values) => {
    try {
      let response;
      if (seletedEditData) {
        response = await axios.post("/api/portfoliodata/course-edit", {
          _id: seletedEditData._id,
          ...values,
        });
      } else {
        response = await axios.post("/api/portfoliodata/course-add", values);
      }
      if (response.data.success) {
        dispatch(setReloadData(true));
        setCourseFormShow(false);
        message.success(response.data.message);
      } else {
        setCourseFormShow(false);
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error);
    }
  };

  const deleteCourse = async (seletedCourseId) => {
    try {
      const response = await axios.delete("/api/portfoliodata/course-delete", {
        data: { _id: seletedCourseId },
      });
      if (response.data.success) {
        dispatch(setReloadData(true));
        setCourseFormShow(false);
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
          className="border p-2 bg-primary !text-white"
          onClick={() => {
            setSeletedEditData(null);
            setCourseFormShow(true);
          }}
        >
          Add New Course
        </button>
      </div>
      <div className="flex flex-wrap gap-5 mt-3">
        {courses.map((course) => (
          <div
            className="border w-full sm:w-4/9 lg:w-3/10 p-2 border-gray-400 shadow-2xl"
            key={course._id}
          >
            <h1 className="text-xl text-primary text-center">
              {course.courseName}
            </h1>
            <hr className="border-gray-400 mb-3" />
            <div>
              <img src={course.courseImage} alt="course image" />
            </div>
            <p>{course.courseDescription}</p>
            <div className="flex justify-end gap-5">
              <button
                className="border px-4 py-1 !text-white bg-red-900"
                onClick={() => deleteCourse(course._id)}
              >
                Delete
              </button>
              <button
                className="border px-5 py-1 !text-white bg-primary"
                onClick={() => {
                  setCourseFormShow(true);
                  setSeletedEditData(course);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={isCourseFormShow}
        footer={false}
        onCancel={() => setCourseFormShow(false)}
      >
        <h1 className="text-center">
          {seletedEditData ? "Edit Course" : "Add Course"}
        </h1>
        <Form
          // form={form}
          layout="vertical"
          onFinish={addAndEditCourse}
          initialValues={seletedEditData}
          key={seletedEditData ? seletedEditData._id : "true"}
        >
          <Form.Item label="Course Name" name="courseName">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Course Image URL" name="courseImage">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Description" name="courseDescription">
            <TextArea></TextArea>
          </Form.Item>
          <div className="flex justify-end gap-5">
            <button
              className="border px-5 py-1 border-primary !text-primary cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setCourseFormShow(false);
                setSeletedEditData(null);
              }}
            >
              Cancel
            </button>
            <button
              className="!text-white bg-primary px-5 py-1 cursor-pointer"
              type="submit"
            >
              {seletedEditData ? "Edit" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
