// Install necessary dependencies:
// npm install react-icons

import React, { useState } from "react";

const WorkExperience = () => {
  const jobs = [
    {
      company: "Housingcart",
      position: "Software Developer",
      duration: "Feb 2023 - Nov 2024",
      description: [
        "• Built a geolocation-enabled WhatsApp chatbot using Meta API and Gupshup software, enhancing customer interaction by 40% and boosting lead generation by 30% through improved UI and functionality.",
        "• Managed and resolved critical bugs and developed an intuitive user interface for the HousingCart app, ensuring a seamless user experience.",
        "• Designed and implemented an attendance tracking Android application with integrated task assignment functionality, utilized by all employees to streamline internal operations.",
      ],
    },
    {
      company: "LessPay Pvt. Ltd.",
      position: "Android Developer Intern",
      duration: "July 2022 - Nov 2022",
      description: [
        "• Worked in the development of merchant, user & sales app.",
        "• Enhanced user engagement through optimized screen development and seamless integration of payment SDKs like Razorpay and Cashfree.",
        "• Leveraged Java and Kotlin for robust implementation, complemented by Firebase for efficient database management.",
      ],
    },
    {
      company: "Honeysha Technologies",
      position: "Frontend Developer Intern",
      duration: "June 2022 - October 2022",
      description: [
        "• Delivered 3+ client projects, including Vrihad Quiz and Awasthy Vitality, with expertise in both Android XML and Flutter development.",
        "• Solely managed the Partywala app, ensuring timely delivery and high-quality outcomes.",
        "• Consistently optimized development processes to meet and exceed client expectations.",
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
      id="workExperience"
      style={{
        marginLeft: window.innerWidth > 768 ? "30vh" : "4vh",
        marginRight: window.innerWidth > 768 ? "10vh" : "2vh",
        marginTop: "5rem",
      }}
    >
      <h1
        style={{
          color: "#ffffff",
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
                    color: "#ccd6f6",
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
