import React, { FC } from "react";
interface props {
  name: string;
  lvl: string;
}

const SkillParameter: FC<props> = ({ name, lvl }) => {
  return (
    <>
      <span>{name}</span>
      <div className="progress bg-light">
        <div
          className="progess-bar bg-info"
          role="progressbar"
          style={{ width: lvl }}
        ></div>
      </div>
    </>
  );
};

export default SkillParameter;
