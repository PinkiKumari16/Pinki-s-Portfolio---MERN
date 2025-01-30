import React from "react";
import { TitlesName } from "../../components/TitlesName";
import { SkillButton } from "../../components/SkillButton";

export const AboutSection = () => {
  const skills = [
    "HTML & CSS",
    "Javascript",
    "React",
    "Express",
    "Redux",
    "Mongo DB",
    "ZOHO",
  ];
  return (
    <>
      <div className="px-5">
        <TitlesName title="About Me" />
        <div className="flex flex-col items-center gap-7 sm:gap-15 justify-center sm:flex-row sm:p-10 md:p-1">
          <div
            className="h-[55vh] w-[80vw] sm:h-[60vh] sm:w-[30vw] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://img.freepik.com/free-photo/3d-rendering-cute-girl-with-glasses-working-her-laptop_1057-45909.jpg?t=st=1738050869~exp=1738054469~hmac=caf4424a20edc4d179a6407c2b95e57d6943fe43425524f95836484cee125feb&w=740)`,
            }}
          ></div>
          <div className="flex flex-col px-5 gap-10 sm:w-1/2 sm:p-0 md:gap-5 md:w-2/3 md:text-[14px] lg:gap-10 lg:text-[18px] text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              saepe officia laudantium quisquam autem rerum molestias provident
              inventore cum officiis, nihil sed voluptates dicta eligendi
              voluptate fugiat voluptatibus non atque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
              nobis, saepe praesentium quam aperiam laborum tempore magni
              dolores, vitae illum aliquam eligendi fuga, accusamus tenetur in
              sunt voluptatibus numquam?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Culpa ad nobis, saepe praesentium quam aperiam
              laborum tempore magni dolores, vitae illum aliquam eligendi fuga,
              accusamus tenetur in sunt voluptatibus numquam?Lorem ipsum dolor
              sit amet consectetur atempore magni dolores, vitae illum aliquam
              eligendi fuga, accusamus tenetur in sunt voluptatibus numquam?
            </p>
          </div>
        </div>
        <div className="py-10 ml-5 sm:ml-20 md:ml-2">
          <h1 className="text-tertiary text-xl">
            Here are a few technologies I've been working with recently:
          </h1>
          <div className="flex flex-wrap gap-5 mt-5">
            {skills.map((skill) => (
              <SkillButton data={skill} className="text-white" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
