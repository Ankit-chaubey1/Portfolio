import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const educationList = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institute: "Lovely Professional University",
    year: "2022 - 2026",
    location: "Jalandhar, Punjab",
    score: "7.5 CGPA"
  },
  {
    degree: "Intermediate (Class 12)",
    institute: "IGSN Intermediate College",
    year: "2019 - 2021",
    location: "Gopalganj, Bihar",
    score: "89%"
  },
  {
    degree: "High School (Class 10)",
    institute: "UMV High School",
    year: "2018 - 2019",
    location: "Gopalganj, Bihar",
    score: "85%"
  },
];

const Education = () => {
  return (
    <section id="education" className="education section" data-aos="fade-up">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationList.map((edu, index) => (
          <div key={index} className="education-card" data-aos="zoom-in">
            <GraduationCap className="icon" />
            <h3>{edu.degree}</h3>
            <p className="institute">{edu.institute}</p>
            <p className="location">{edu.location}</p>
            <div className="edu-meta">
              <span><Calendar size={16} className="inline" /> {edu.year}</span>
              <span className="score">Score: {edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
