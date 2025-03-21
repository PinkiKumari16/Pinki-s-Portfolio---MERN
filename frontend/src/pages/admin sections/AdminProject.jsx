import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReloadData } from "../../redux/rootSlice";
import { useNavigate } from "react-router-dom";

export const AdminProject = () => {
  const dispatch = useDispatch();
  const [isAddProjectFormShow, setIsAddProjectFormShow] = useState(false);
  const [selectedProjectEdit, setSelectedProjectEdit] = useState(null);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const navigate = useNavigate();
  console.log(selectedProjectEdit);

  const editOrAddProject = async (values) => {
    try {
      let response;
      if (selectedProjectEdit) {
        response = await axios.post("/api/portfoliodata/project-edit", {
          ...values,
          _id: selectedProjectEdit._id
        });
      } else {
        response = await axios.post("/api/portfoliodata/project-add", values);
      }
      if (response.data.success) {
        dispatch(setReloadData(true));
        setIsAddProjectFormShow(false);
        message.success(response.data.message);
      } else {
        setIsAddProjectFormShow(false);
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error);
    }
  };

  const deleteProject = async (id) => {
    try {
      const response = await axios.delete("/api/portfoliodata/project-delete", {
        data: { _id: id },
      });
      if (response.data.success) {
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
          className="border p-2 !text-white lg:font-bold bg-primary !text-[10px] lg:!text-[13px]"
          onClick={() => {
            setSelectedProjectEdit(null);
            setIsAddProjectFormShow(true);
          }}
        >
          Add New Project
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 mt-2 gap-10">
        {projects.map((project) => (
          <div
            id={project._id}
            className="projectBox flex flex-col border lg:gap-5 border-gray-400 p-2 shadow-2xl "
          >
            <div className="sm:h-50">
              <img src={project.projectImage} alt="project image" />
            </div>
            <div>
              <h1>{project.projectName}</h1>
              <p>{project.technology}</p>
              <p
                className="readMore text-blue-500 font-bold text-[12px] cursor-pointer"
                onClick={() => navigate("/admin/" + project._id)}
              >
                Read More...
              </p>
              <div className="flex justify-end gap-5">
                <button
                  className="border px-3 py-1 !text-white bg-red-800"
                  onClick={() => deleteProject(project._id)}
                >
                  Delete
                </button>
                <button
                  className="border px-3 py-1 !text-white bg-primary"
                  onClick={() => {
                    setIsAddProjectFormShow(true);
                    setSelectedProjectEdit(project);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={isAddProjectFormShow}
        footer={null}
        onCancel={() => setIsAddProjectFormShow(false)}
      >
        <h1 className="text-center">
          {selectedProjectEdit ? "Edit Project" : "Add Project"}
        </h1>
        <hr className="border-gray-300 mb-5" />
        <Form
          layout="vertical"
          onFinish={editOrAddProject}
          initialValues={selectedProjectEdit}
          key={selectedProjectEdit ? selectedProjectEdit._id : "true"}
        >
          <Form.Item label="Project Name" name="projectName">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Technology" name="technology">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Project Image" name="projectImage">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Project Deploy Link" name="link">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Description" name="projectDescription">
            <TextArea></TextArea>
          </Form.Item>
          <div className="flex justify-end gap-5">
            <button
              className="border border-primary !text-primary px-5 py-1 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsAddProjectFormShow(false);
              }}
            >
              Cencel
            </button>
            <button
              className="px-5 py-1 border bg-primary !text-white cursor-pointer"
              type="submit"
            >
              {selectedProjectEdit ? "Edit" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
