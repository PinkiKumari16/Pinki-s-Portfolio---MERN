import React from "react";

export const SkillButton = ({ data }) => {
  return (
    <>
      <button className="border-2 !text-tertiary px-5 py-3 rounded">
        {data}
      </button>
    </>
  );
};
