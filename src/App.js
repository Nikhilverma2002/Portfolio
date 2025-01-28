import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from "./components/ContactForm";
import WorkExperience from "./components/WorkExperience";


function App() {
  return (
    <>
      {/* <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#7E7474",
        }}
      /> */}
      <div>
        <Navbar />
        <HomeBanner id="home" />

        <AboutMe id="about" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Ladyish: Handmade Crochet Marketplace."
          projectDesc="A one-stop shop for best handmade crochet products, unique designs, and artisan-crafted goods."
          technology="Next JS, Node JS, MongoDB & Google Gemini."
          android="no"
          projectLink="https://www.ladyish.in/"
          deployedProjectLink="https://www.ladyish.in/"
          projectImg={require("./images/projectLadyish.png")}
        />

        <ProjectCard
          projectTitle="Syno : An exclusive hub for every GECian to connect."
          projectDesc="Our college students sought a dedicated platform to exchange ideas, 
          so we created SYNO. SYNO empowers students and alumni to seamlessly share their thoughts and collaborate effortlessly."
          projectLink="https://play.google.com/store/apps/details?id=in.aryomtech.syno&pcampaignid=web_share"
          android="yes"
          technology="Android, Java, XML & Firebase."
          deployedProjectLink="https://play.google.com/store/apps/details?id=in.aryomtech.syno&pcampaignid=web_share"
          projectImg={require("./images/projectSyno.png")}
        />

        <ProjectCard
          className="odd"
          projectTitle="SANGYAN: Digitalizing Police stations & HighCourt"
          projectDesc="This government app is designed for the Police Legal Section of the High Court to streamline the processing of case diaries between police stations and the High Court. It ensures timely alerts for police officers regarding the submission and retrieval of case diaries, facilitating efficient coordination and communication."
          deployedProjectLink="https://drive.google.com/file/d/1Jyl87-ha5FZ5cP8j-pA8iL2fT137iOfV/view?usp=sharing"
          android="git"
          technology="Android, Java, XML, Appscript & Firebase."
          projectLink="https://github.com/Nikhilverma2002/High-Court-Alert.git"
          projectImg={require("./images/projectSangyan.png")}
        />

        <ProjectCard
          projectTitle="Property Bot: Search nearby properties"
          projectDesc="An approach to find nearby properties effortlessly with our WhatsApp Chatbot! Say 'Hi/Hello' to start and get real-time property suggestions based on your location."
          projectLink="https://github.com/Nikhilverma2002/Property-Bot.git"
          android="git"
          technology="Geolocation,  Whatsapp Api, NodeJS & MongoDB"
          deployedProjectLink="https://wa.me/+919109958319"
          projectImg={require("./images/projectBot.png")}
        />

        <WorkExperience id="workExperience" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
