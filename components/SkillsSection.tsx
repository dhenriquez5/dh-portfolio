import React from "react";
import { experiences, skills } from "../utils/data.js";
import SkillParameter from './SkillParameter';

export const SkillsSection = () => {
  return (
    <div className="col-md-4 col-xs-12 mt-1">
      <div className="card bg-light">
        <div className="card-body">
          <h4 className="text-center">Skills</h4>
          {skills &&
            skills.map((sk) => (
              <SkillParameter key={sk.name} lvl={sk.lvl} name={sk.name} />
            ))}
        </div>
      </div>
    </div>
  );
};
