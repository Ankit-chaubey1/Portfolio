import React from 'react';
import { Code, Database, Server, Smartphone } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Skills = () => {
  const skills = [
    { icon: <Code size={32} />, title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'] },
    { icon: <Server size={32} />, title: 'Backend', items: ['Node.js', 'PHP', 'Java','Django'] },
    { icon: <Database size={32} />, title: 'Database', items: ['MongoDB', 'MySQL', 'SqLite',] },
    { icon: <Smartphone size={32} />, title: 'Tools', items: ['Git', 'Postman', 'VS Code'] },
    {
  icon: <Code size={32} />, // You can use any relevant icon like <Code />, <Terminal />, etc.
  title: 'Languages',
  items: ['C', 'C++', 'Java', 'Python']
},
  ];

  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" data-aos="zoom-in">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <ul>
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
