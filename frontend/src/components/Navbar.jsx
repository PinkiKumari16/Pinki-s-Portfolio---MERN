import React from "react";

export const Navbar = ({navbarTitle, sectionsTitle}) => {
  const sam = "Contact";
  return (
    <>
      <nav className="flex p-3 text-[#fff] bg-primary lg:text-2xl justify-between fixed left-0 top-0 w-full z-[100]">
        <h1>{navbarTitle}</h1>
        <div className="flex text-sm lg:text-lg gap-5 text-tertiary pointer">
          {sectionsTitle.map((section, index)=>(
            <a href={`#${section.toLowerCase()}`} key={index}>{section}</a>
          ))}
        </div>
      </nav>
    </>
  );
};
