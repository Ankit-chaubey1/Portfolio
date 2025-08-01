import React, { useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            "I'm a passionate <strong> Full Stack Web Developer and Software Engineer</strong> with hands-on experience in building dynamic web applications and scalable backend systems, especially using the <b>MERN stack</b> (MongoDB, Express.js, React, Node.js). I enjoy turning complex problems into simple, beautiful, and intuitive solutions that enhance user experience and performance."


          </p>
          <h3>Technical Skills</h3>
          <ul>
            <li>💻 Languages: JavaScript, Java, PHP, C++, Python</li>
            <li>⚛️ Frontend: React, Bootstrap, HTML, CSS</li>
            <li>🛠️ Backend: Node.js, Express, PHP,Django,RESTful API Development,Authentication & Authorization</li>
            <li>🗄️ Databases: MongoDB, MySQL</li>
            <li>🧪 Tools: Git, GitHub, VS Code, Postman</li>
          </ul>

          <h3>Experience</h3>
          <p>
            "Built and deployed full-stack projects including e-commerce platforms, portfolio websites, and management systems.<br></br>
 💼 Collaborated in teams for capstone projects and open-source contributions. Solved 200+ problems across platforms like LeetCode, GeeksforGeeks, CodeChef, and HackerRank, consistently enhancing my data structures and algorithms skills."


          </p>

          <h3>Interests</h3>
          <p>
            "Apart from coding, I enjoy solving algorithmic problems on platforms like LeetCode and GeeksforGeeks, which helps me strengthen my problem-solving skills. I love building projects, especially working on backend development and creating RESTful APIs. I’m also passionate about staying updated with the latest tech trends, participating in hackathons, and exploring productivity tools. Additionally, I find great satisfaction in mentoring juniors and helping my peers grow in their tech journey."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
