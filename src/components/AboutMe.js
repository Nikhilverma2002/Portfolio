import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm <span> Nikhil </span> a tech enthusiast with hands-on experience in
        software development through various internships and full-time roles.
        I'm a quick learner with a passion for continuously exploring new
        technologies and enhancing my skill set.
        <br /> <br />
        Today, I am grateful for the opportunity to have worked at{" "}
        <a
          className="resume"
          href="https://www.housingcart.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HousingCart
        </a>
        <b /> - a home rental solution provider. My current focus is on
        designing accessible products and crafting seamless digital experiences
        that make a meaningful impact. Feel free to explore my{" "}
        <a
          className="resume"
          href="https://www.linkedin.com/in/nikhilverma-/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin profile.
        </a>
      </div>
      <div className="profile-photo">
        <img className="img" src={myProfile} alt="Profile"></img>
      </div>
      {/* <div className="name">NIKHI</div> */}
    </div>
  );
}
