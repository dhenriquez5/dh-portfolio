import React from "react";
import { experiences, skills } from "../utils/data.js";
import { ExperienceItem } from './ExperienceItem';

export const ExperienceSection = () => {
  return (
    <div className="col-md-8 col-xs-12 mt-1">
      <div className="card bg-light">
        <div className="card-body">
          <h4 className="text-center">Experience</h4>
          {experiences &&
            experiences.map((experience) => (
              <ExperienceItem key={experience.id} {...experience} />
            ))}
        </div>
      </div>
    </div>
  );
};
