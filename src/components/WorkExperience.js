// Install necessary dependencies:
// npm install react-icons

import React, { useState } from "react";

const WorkExperience = () => {
  const jobs = [
    {
      company: "Housingcart",
      position: "Cloud Engineer",
      duration: "Aug 2024 – present",
      description: [
        "I have a deep understanding of GCP services and how to effectively utilize them for various cloud-based workloads, such as compute, storage, networking, and database solutions.",
        "I utilize Terraform to automate the provisioning and management of GCP resources, including infrastructure as code (IaC) practices for efficient and consistent deployments.",
        "I’m building a proficiency in creating, configuring, and managing Kubernetes clusters on GKE, using it to deploy and scale containerized applications.",
      ],
    },
    {
      company: "LessPay Pvt. Ltd.",
      position: "Software Engineer",
      duration: "Jan 2023 – Jul 2024",
      description: [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to define and implement new features.",
        "Optimized application performance, reducing load times by 30%.",
      ],
    },
    {
      company: "Honeysha Technologies",
      position: "Research Assistant",
      duration: "Jun 2022 – Dec 2022",
      description: [
        "Assisted in research projects focused on machine learning and data analysis.",
        "Published a paper on predictive modeling techniques in a peer-reviewed journal.",
        "Conducted data preprocessing and visualization for large datasets.",
      ],
    },
  ];

  const companies = [
    "Housingcart",
    "LessPay Pvt. Ltd.",
    "Honeysha Technologies",
  ];

  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <div
      style={{
        marginLeft: window.innerWidth > 768 ? "30vh" : "4vh",
        marginRight: window.innerWidth > 768 ? "10vh" : "2vh",
        marginTop: "5rem",
      }}
    >
      <h1
        style={{
          color: "#64ffda",
          marginBottom: "4rem",
          fontSize: "50px",
          marginTop: "7rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        My Experience
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
        }}
      >
        {/* Left Sidebar */}
        <div
          style={{
            flex: 1,
            borderLeft: window.innerWidth > 768 ? "2px solid #64ffda" : "none",
            paddingLeft: window.innerWidth > 768 ? "1rem" : "0",
          }}
        >
          {companies.map((company, index) => (
            <h3
              key={index}
              onClick={() => setSelectedJob(jobs[index])}
              style={{
                margin: "0.5rem 0",
                cursor: "pointer",
                color:
                  selectedJob && selectedJob.company === company
                    ? "#ffffff"
                    : "#8892b0",
              }}
            >
              {"• " + company}
            </h3>
          ))}
        </div>

        {/* Right Content */}
        <div
          style={{
            flex: 3,
          }}
        >
          <div
            style={{
              marginTop: "1vh",

              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 style={{ color: "#64ffda" }}>
              {selectedJob.position}{" "}
              <span style={{ color: "#ccd6f6" }}>@ {selectedJob.company}</span>
            </h3>
            <p style={{ fontStyle: "italic", color: "#8892b0" }}>
              {selectedJob.duration}
            </p>
            <ul>
              {selectedJob.description.map((point, i) => (
                <li
                  key={i}
                  style={{
                    margin: "0.5rem 0",
                    lineHeight: "1.5",
                    color: "#8892b0",
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
