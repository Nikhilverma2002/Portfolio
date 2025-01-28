import React from 'react'
import "./SkillCardStyle.css";
import { DiJava, DiDart } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiReact,
  SiNextdotjs,
  SiAndroidstudio,
  SiFirebase,
  SiDocker,
  SiMongodb,
  SiGooglecloud,
  SiFigma,
  SiAmazonaws,
  SiIntellijidea,
} from "react-icons/si";
import {
  TbBrandTailwind,
  TbBrandJavascript,
  TbBrandKotlin,
  TbCloud,
} from "react-icons/tb";
import { IoLogoNpm } from "react-icons/io";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title="C++">
              <DiJava className="techLogo" />
              <h3 className="techContent">Java</h3>
            </abbr>
            <abbr title="Dart">
              <DiDart className="techLogo" />
              <h3 className="techContent">Dart</h3>
            </abbr>
            <abbr title="JavaScript">
              <TbBrandJavascript className="techLogo" />
              <h3 className="techContent">Javascript</h3>
            </abbr>
            <abbr title="HTML 5">
              <TbBrandKotlin className="techLogo" />
              <h3 className="techContent">Kotlin</h3>
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title="NextJS">
              <SiNextdotjs className="techLogo" />
              <h3 className="techContent">NextJS</h3>
            </abbr>
            <abbr title="ReactJS">
              <SiReact className="techLogo" />
              <h3 className="techContent">ReactJS</h3>
            </abbr>
            <abbr title="CSS 3">
              <TbBrandTailwind className="techLogo" />
              <h3 className="techContent">Tailwind</h3>
            </abbr>
            {/* <abbr title="Git/Github">
              <DiGit className="techLogo" />
            </abbr> */}
            <abbr title="NPM">
              <IoLogoNpm className="techLogo" />
              <h3 className="techContent">NPM</h3>
            </abbr>
            {/* <abbr title="Bootstrap">
              <SiBootstrap className="techLogo" />
              <h3 className="techContent">Bootstrap</h3>
            </abbr> */}
          </div>
        </div>
        <div className="skill-box">
          <h2>Database & Services</h2>
          <div className="skillset">
            <abbr title="MongoDB">
              <SiMongodb className="techLogo" />
              <h3 className="techContent">MongoDB</h3>
            </abbr>
            <abbr title="Firebase">
              <SiFirebase className="techLogo" />
              <h3 className="techContent">Firebase</h3>
            </abbr>
            <abbr title="Figma">
              <SiAmazonaws className="techLogo" />
              <h3 className="techContent">AWS S3 & EC2</h3>
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Tools & Platforms</h2>
          <div className="skillset">
            <abbr title="Visual Studio Code">
              <SiVisualstudiocode className="techLogo" />
              <h3 className="techContent">VS Code</h3>
            </abbr>
            <abbr title="Android Studio">
              <SiAndroidstudio className="techLogo" />
              <h3 className="techContent">Android</h3>
            </abbr>
            <abbr title="Cloudinary">
              <TbCloud className="techLogo" />
              <h3 className="techContent">Cloudinary</h3>
            </abbr>
            <abbr title="Figma">
              <SiFigma className="techLogo" />
              <h3 className="techContent">Figma</h3>
            </abbr>
            <abbr title="Docker">
              <SiDocker className="techLogo" />
              <h3 className="techContent">Docker</h3>
            </abbr>

            <abbr title="IntelliJ">
              <SiIntellijidea className="techLogo" />
              <h3 className="techContent">IntelliJ</h3>
            </abbr>
          </div>
        </div>
      </div>
    </>
  );
}
