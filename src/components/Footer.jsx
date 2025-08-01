import './Footer.css';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Ankit Chaubey. All rights reserved.</p>

      <div className="footer-icons">
        <a href="mailto:chaubeyankit3449@gmail.com" target="_blank" rel="noreferrer">
          <Mail />
        </a>
        <a href="https://github.com/Ankit-chaubey1" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a href="https://linkedin.com/in/ankit-chaubey1" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
