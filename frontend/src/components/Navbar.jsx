import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = ({ navbarTitle, sectionsTitle }) => {
  const [isVisibility, setVisibility] = useState(false);
  // console.log(isVisibility);
  return (
    <>
      <nav className="flex p-3 text-[#fff] bg-primary lg:text-2xl justify-between fixed top-0 w-full h-12">
        <h1>{navbarTitle}</h1>
        <div className="flex flex-col">
          <div
            className="block sm:hidden text-right"
            onClick={() => setVisibility(!isVisibility)}
          >
            <MenuIcon />
          </div>
          <div
            className={`flex flex-col sm:flex-row sm:justify-around text-sm lg:text-lg gap-5 text-tertiary pointer bg-primary h-60 ${
              isVisibility ? "block" : "hidden"
            } p-2 sm:h-6 sm:flex sm:block`}
          >
            {sectionsTitle.map((section, index) => (
              <a href={`#${section.toLowerCase()}`} key={index}>
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
