import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Projects = () => {
  const projects = [
    {
      title: 'E-DELIVER Website(E-Commerce clone store)',
      description: 'Deliver Web is a full-stack E-Commerce web application designed to replicate and streamline the online product shopping experience. Built using React, Node.js, Express.js, and MongoDB, the platform features secure JWT-based authentication, dynamic product filtering, and role-based access for users and admins.',
      github: 'https://github.com/Ankit-chaubey1/EDELIVER',
      demo: 'https://yourportfolio.live',
    },
    {
      title: 'Online Product Delivery(CampusBazaar)',
      description: 'A community-driven e-commerce app with admin/user dashboards where users can upload, browse, and purchase products. Features include product management, role-based access, and location tagging for nearby seller discovery.',
      github: 'https://github.com/Ankit-chaubey1/LOCALBAZAAR',
      demo: 'https://localbazaar-rbz8.vercel.app/',
    },
    {
      title: 'School Management System',
      description: 'A full-stack school system with role-based access, course handling, and fee management.  comprehensive School Management System built using PHP, HTML, CSS, JavaScript, and MySQL, designed to handle various aspects of academic administration with role-based access control.',
      github: 'https://github.com/Ankit-chaubey1/Schoolwebsite',
      demo: 'https://github.com/Ankit-chaubey1/Schoolwebsite',
    },
  ];

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card" data-aos="zoom-in">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <Github size={20} /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                <ExternalLink size={20} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
