import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="contact section" data-aos="fade-up">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p><Mail className="icon" /> chaubeyankit3449@gmail.com</p>
          <p><Phone className="icon" /> +91 9229553145</p>
          <p><MapPin className="icon" /> Gopalganj,Bihar, India</p>
        </div>
        <div className="contact-socials">
          <a href="https://github.com/Ankit-chaubey1" target="_blank" rel="noreferrer">
            <Github className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-chaubey1/" target="_blank" rel="noreferrer">
            <Linkedin className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
