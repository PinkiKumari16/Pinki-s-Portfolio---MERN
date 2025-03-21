import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import { AdminIntro } from "./admin sections/AdminIntro";
import { AdminAbout } from "./admin sections/AdminAbout";
import { AdminExperience } from "./admin sections/AdminExperience";
import { AdminProject } from "./admin sections/AdminProject";
import { AdminCourse } from "./admin sections/AdminCourse";
import { AdminContact } from "./admin sections/AdminContact";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const AdminPage = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const [activeTab, setActiveTab] = useState("1");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  const handleTabs = (key) => {
    setActiveTab(key);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  return (
    <div>
      <Navbar navbarTitle="Admin Panel" sectionsTitle={[]} />
      {portfolioData && (
        <div className="p-4 mt-10 justify-between">
          <div className="flex justify-end">
            <h1
              className="logoutButton text-primary text-xl underline cursor-pointer"
              onClick={logout}
            >
              Logout
            </h1>
          </div>
          <div className="adminpanel">
            <Tabs activeKey={activeTab} onChange={handleTabs}>
              <TabPane tab="Intro" key="1">
                <AdminIntro />
              </TabPane>
              <TabPane tab="About" key="2">
                <AdminAbout />
              </TabPane>
              <TabPane tab="Experience" key="3">
                <AdminExperience />
              </TabPane>
              <TabPane tab="Projects" key="4">
                <AdminProject />
              </TabPane>
              <TabPane tab="Courses" key="5">
                <AdminCourse />
              </TabPane>
              <TabPane tab="Contact" key="6">
                <AdminContact />
              </TabPane>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};
