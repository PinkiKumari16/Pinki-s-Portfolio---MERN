import React from "react";
import { Navbar } from "../components/Navbar";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import { AdminIntro } from "./admin sections/AdminIntro";
import { AdminAbout } from "./admin sections/AdminAbout";
import { AdminExperience } from "./admin sections/AdminExperience";
import { useSelector } from "react-redux";

export const AdminPage = () => {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Navbar navbarTitle="Admin Panel" sectionsTitle={[]} />
      {portfolioData && (
        <div className="p-4 mt-20">
          {/* <Tabs defaultActiveKey="1" items={items} /> */}
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
          </Tabs>
        </div>
      )}
    </div>
  );
};
