import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Sidebar = () => {
  return (
    <div className="static md:fixed md:left-0 md:bottom-0 md:px-4 lg:px-6">
      <div className="flex flex-col items-center gap-5">
        <div className="flex md:flex-col gap-6 text-gray-400">
          <a href="pinkikmr2672002@gmail.com" target="_blank">
            <AttachEmailRoundedIcon className="icon-size"/>
          </a>
          <a
            href="https://www.linkedin.com/in/pinki-kumari-42b409257/"
            target="_blank"
          >
            <LinkedInIcon className="icon-size"/>
          </a>
          <a href="https://github.com/PinkiKumari16/" target="_blank">
            <GitHubIcon className="icon-size"/>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookRoundedIcon className="icon-size"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon className="icon-size"/>
          </a>
        </div>
        <div className="w-0 md:w-[1px] h-32 bg-[#125f63]"></div>
      </div>
    </div>
  );
};
