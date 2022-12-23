import { Inter } from "@next/font/google";
import { ExperienceItem } from "../components/ExperienceItem";
import { Layout } from "../components/Layout";
import PersonalInfo from "../components/PersonalInfo";
import SkillParameter from "../components/SkillParameter";
import { experiences, skills } from "../utils/data.js";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout
        description="Portfolio David Henriquez"
        title="Portfolio David Henriquez"
      >
        {/* Header Card */}
        <PersonalInfo />

        {/* {Second Section} */}
        <div className="row py-2" >
          <div className="col-md-4 col-xs-12 mt-1" >
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
        </div>
      </Layout>
    </>
  );
}
