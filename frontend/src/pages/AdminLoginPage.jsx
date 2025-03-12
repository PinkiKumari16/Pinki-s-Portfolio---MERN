import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Form, Input, message } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/rootSlice";

export const AdminLoginPage = () => {
  const [isPasswordShow, setPasswordShow] = useState(false);
  const dispatch = useDispatch();

  const getAdminData = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/portfoliodata/admin-login",
        values
      );
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data.data));
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      if (error.response) {
        message.error(error.response.data.message || "An error occurred");
      } else {
        message.error("An error occurred");
      }
    }
  };
  return (
    <div>
      <Navbar navbarTitle="Admin Login" sectionsTitle={[]} />
      <div className="flex justify-center items-center h-screen bg-primary">
        <Form
          className="rounded-xl shadow-white shadow-2xl bg-white !py-10 !px-8 text-center !text-primary"
          onFinish={getAdminData}
        >
          <h1 className="text-2xl !font-bold">Portfolio Login</h1>
          <hr className="mb-10 border-gray-400" />
          <Form.Item label="User Name" name="userName">
            <div className="inputDiv">
              <Input bordered={false}></Input>
              <DriveFileRenameOutlineIcon />
            </div>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <div className="inputDiv">
              <Input
                bordered={false}
                type={isPasswordShow ? "text" : "password"}
              ></Input>
              {isPasswordShow ? (
                <VisibilityOffIcon
                  onClick={() => setPasswordShow(false)}
                  className="cursor-pointer"
                />
              ) : (
                <VisibilityIcon
                  onClick={() => setPasswordShow(true)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </Form.Item>
          <button
            className="!text-white bg-primary w-full py-2 rounded cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};
