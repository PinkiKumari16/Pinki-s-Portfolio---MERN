import React from "react";
import { TitlesName } from "../../components/TitlesName";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useSelector } from "react-redux";

// import contactAnimation from '/DND3juGxYc.mp4'

export const Contact = () => {
  const {portfolioData} = useSelector((state)=>state.root);
  const {contact} = portfolioData;
  return (
    <div id="contact">
      <TitlesName title="Say Hello" />
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="text-tertiary">
          <span>&#123;</span>
          <p className="px-10 py-2">
            Name : {contact.name || " "},
          </p>
          <p className="px-10 py-2">
            Age : {contact.age || " "},
          </p>
          <p className="px-10 py-2">
            Gender : {contact.gender || " "},
          </p>
          <p className="px-10 py-2">
           Email : {contact.email || " "},
          </p>
          <p className="px-10 py-2">
            Mobile : {contact.mobile || " "},
          </p>
          <p className="px-10 py-2">
            Country : {contact.country || " "},
          </p>
          {/* {Object.keys(contact).map((data) => (
            <p className="px-10 py-2">
              {data} : {contact[data]},
            </p>
          ))} */}
          <span>&#125;</span>
        </div>
        <DotLottieReact
          src="https://lottie.host/29138dda-6440-4f52-9aa7-28d37f353ca1/cq9ti7eYs6.lottie"
          autoplay
          className="h-[60vh]"
        />
      </div>
    </div>
  );
};
