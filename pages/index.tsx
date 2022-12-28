import { Inter } from "@next/font/google";
import Image from "next/image";
import { ExperienceItem } from "../components/ExperienceItem";
import { ExperienceSection } from "../components/ExperienceSection";
import { Layout } from "../components/Layout";
import PersonalInfo from "../components/PersonalInfo";
import SkillParameter from "../components/SkillParameter";
import { SkillsSection } from '../components/SkillsSection';
import Link from 'next/link';
import { PortfolioSection } from "../components/PortfolioSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout
        title="David Henríquez Turcios"
        description="David Henriquez Turcios official Website. Software Engineer and Fullstack Developer with 6 years of experience working
        with different technologies like Javascript, ReactJs, NodeJs, Typescript, Angular, NetCore who really enjoy programming and learning new technologies."
      >
        {/* Header Card */}
        <PersonalInfo />

        {/* {Second Section} */}
        <div className="row py-2" >
          <SkillsSection/>
          <ExperienceSection/>
        </div>

        {/* Portfolio */}
        <PortfolioSection/>
      </Layout>
    </>
  );
}
