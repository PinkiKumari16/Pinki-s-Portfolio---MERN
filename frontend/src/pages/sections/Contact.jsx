import React from "react";
import { TitlesName } from "../../components/TitlesName";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useSelector } from "react-redux";

// import contactAnimation from '/DND3juGxYc.mp4'

export const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div id="contact" className="mt-5">
      <TitlesName title="Say Hello" />
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="text-tertiary">
          <span>&#123;</span>
          {Object.keys(contact).map((data) => {
            if (
              !(data === "_id" || data === "__v" || data === "contactImage")
            ) {
              return (
                <p className="px-10 py-2" key={data}>
                  {data} : {contact[data]},
                </p>
              );
            }
          })}
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
