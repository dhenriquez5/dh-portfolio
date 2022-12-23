import React, { FC } from "react";
interface props {
  name: string;
  init_date: string;
  end_date: string;
  description: string;
}
export const ExperienceItem:FC<props> = ({name,init_date,end_date,description}) => {
  return (
    <>
      <ul>
        <li>
          <h6>{name}</h6>
          <h6>{init_date}-{end_date}</h6>
          <p>{description}</p>
        </li>
      </ul>
    </>
  );
};
