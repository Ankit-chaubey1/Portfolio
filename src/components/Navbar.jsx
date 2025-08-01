// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import './Navbar.css';
// import generalcv_mrn from '../assets/generalcv_mrn.pdf';
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navLinks = [
//     { path: '/', label: 'About' },
//     { path: '/skills', label: 'Skills' },
//     { path: '/projects', label: 'Projects' },
//     { path: '/certifications', label: 'Certifications' },
//     { path: '/education', label: 'Education' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="logo">Ankit Chaubey — Software Engineer</div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </div>
//       <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//         {navLinks.map((link) => (
//           <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
//             <Link to={link.path} onClick={() => setIsOpen(false)}>
//               {link.label}
//             </Link>
//           </li>
//         ))}
//         <li>
//           <a href="./generalcv_mrn.pdf" download className="download-btn">Download CV</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import generalcv_mrn from '../assets/generalcv_mrn.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">Ankit Chaubey — Software Engineer</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
            <Link to={link.path} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a href={generalcv_mrn} download className="download-btn">Download CV</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
