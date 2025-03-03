import React from "react";
import { Navbar } from "../components/Navbar";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import { AdminIntro } from "./admin sections/AdminIntro";
import { AdminAbout } from "./admin sections/AdminAbout";
import { AdminExperience } from "./admin sections/AdminExperience";
import { AdminProject } from './admin sections/AdminProject';
import { AdminCourse } from './admin sections/AdminCourse';
import {AdminContact } from './admin sections/AdminContact'
import { useSelector } from "react-redux";

export const AdminPage = () => {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Navbar navbarTitle="Admin Panel" sectionsTitle={[]} />
      {portfolioData && (
        <div className="adminpanel p-4 mt-20">
          <Tabs defaultActiveKey="1">
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
      )}
    </div>
  );
};
