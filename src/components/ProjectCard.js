import React from 'react';
import "./ProjectCardStyle.css";
import {FaArrowRight} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

export default function ProjectCard(props) {
  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  };

  return (
    <div className="project-window" id={props.id}>
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
          <div className="project-title">{props.projectTitle}</div>

          <div className="desc">{props.projectDesc}</div>

          <div className="tech">
            <FiSettings
              className="social"
              size={20}
              style={{
                position: "relative",
                top: "5px",
                strokeWidth: "2",
              }}
            />
            <div className="tech-text">{props.technology}</div>
          </div>

          <button className="btn" onClick={handleOnClick}>
            <span>
              View on{" "}
              {props.android === "yes" ? (
                <FiPlay
                  className="social"
                  size={20}
                  style={{
                    marginLeft: "8px",
                    position: "relative",
                    top: "2px",
                    strokeWidth: "3",
                  }}
                />
              ) : props.android === "git" ? (
                <FiGithub
                  className="social"
                  size={20}
                  style={{
                    marginLeft: "8px",
                    position: "relative",
                    top: "2px",
                    strokeWidth: "3",
                  }}
                />
              ) : (
                <FiGlobe
                  className="social"
                  size={20}
                  style={{
                    marginLeft: "8px",
                    position: "relative",
                    top: "2px",
                    strokeWidth: "3",
                  }}
                />
              )}
            </span>

            <FaArrowRight
              className="btn-arrow"
              size={22}
              style={{ marginLeft: "1.5rem" }}
            />
          </button>
        </div>
        <div className="project-img">
          <a
            href={props.deployedProjectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={props.projectImg} alt="Displaying Project" />
          </a>
        </div>
      </div>
    </div>
  );
}