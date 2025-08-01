// // import React from "react";
// // import { Award } from "lucide-react";

// // const certifications = [
// //   {
// //     title: "Responsible and Safe AI (NPTEL + IIT Madras)",
// //     issuer: "IIT Madras & IIIT Hyderabad",
// //     date: "Jan 2025",
// //     link: "https://your-certificate-link.com", // optional
// //   },
// //   {
// //     title: "Java Programming",
// //     issuer: "CipherSchool",
// //     date: "Aug 2024",
// //     link: "https://your-java-cert.com",
// //   },
// //    {
// //     title: "Python Programming",
// //     issuer: "CipherSchool",
// //     date: "Jan 2023",
// //     link: "https://your-java-cert.com",
// //   },
// //    {
// //     title: "Java Programming",
// //     issuer: "CipherSchool",
// //     date: "Aug 2024",
// //     link: "https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65f54",
// //   },
// //   {
// //     title: "Data Structures and Algorithms",
// //     issuer: "Udemy",
// //     date: "May 2024",
// //     link: "https://aws-cert.com",
// //   },
// //   // Add more as needed
// // ];

// // const Certifications = () => {
// //   return (
// //     <section id="certifications" className="certifications section" data-aos="fade-up">
// //       <h2 className="section-title">Certifications</h2>
// //       <div className="cert-grid">
// //         {certifications.map((cert, index) => (
// //           <div className="cert-card" key={index} data-aos="zoom-in">
// //             <Award className="icon" />
// //             <h3>{cert.title}</h3>
// //             <p>{cert.issuer}</p>
// //             <span>{cert.date}</span>
// //             {cert.link && (
// //               <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
// //                 View Certificate
// //               </a>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Certifications;
// import React from "react";
// import { Award } from "lucide-react";

// import cse306_mooc from "../assets/certifications/cse306_mooc.pdf";
// import cse320_mooc from "../assets/certifications/cse320_mooc.pdf";
// import dsa_mooc from "../assets/certifications/dsa_mooc.pdf";
// import frontend_mooc from "../assets/certifications/frontend_mooc.pdf";
// import NPTEL_compressed from "../assets/certifications/NPTEL_compressed.pdf";

// import java from "../assets/certifications/java.pdf";
// import INT22_mooc from "../assets/certifications/INT22_mooc.pdf";


// const certifications = [
//   {
//     title: "Responsible and Safe AI (NPTEL + IIT Madras)",
//     issuer: "IIT Madras & IIIT Hyderabad",
//     date: "Jan 2025",
//     image: NPTEL_compressed,
//   },
//   {
//     title: "Java Programming",
//     issuer: "CipherSchool",
//     date: "Aug 2024",
//     image: java,
//   },
//   {
//     title: "Computer Networks ",
//     issuer: "Coursera",
//     date: "Jan 2023",
//     image: cse306_mooc,
//   },
//   {
//     title: "Data Structures and Algorithms",
//     issuer: "Udemy",
//     date: "May 2024",
//     image: dsa_mooc,
//   },

//   // Add more with appropriate image paths
// ];

// const Certifications = () => {
//   return (
//     <section id="certifications" className="certifications section" data-aos="fade-up">
//       <h2 className="section-title">Certifications</h2>
//       <div className="cert-grid">
//         {certifications.map((cert, index) => (
//           <div className="cert-card" key={index} data-aos="zoom-in">
//             <Award className="icon" />
//             <h3>{cert.title}</h3>
//             <p>{cert.issuer}</p>
//             <span>{cert.date}</span>
//             <img src={cert.image} alt={cert.title} className="cert-image" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;

import React from "react";
import { Award } from "lucide-react";

// Import PDFs from public folder, OR make sure these paths point to /public/certifications/
const certifications = [
  {
    title: "Responsible and Safe AI (NPTEL + IIT Madras)",
    issuer: "IIT Madras & IIIT Hyderabad",
    date: "Jan 2025",
    path: "/certifications/NPTEL_compressed.pdf",
  },
  {
    title: "Java Programming",
    issuer: "CipherSchool",
    date: "Aug 2024",
    path: "/certifications/java.pdf",
  },
  {
    title: "Computer Networks",
    issuer: "Coursera",
    date: "Jan 2023",
    path: "/certifications/cse306_mooc.pdf",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Udemy",
    date: "May 2024",
    path: "/certifications/dsa_mooc.pdf",
  },
 {
    title: "Introduction to Backnend",
    issuer: "Coursera",
    date: "May 2024",
    path: "/certifications/INT22_mooc.pdf",
  },

 {
    title: "Introduction to Frontend",
    issuer: "Coursera",
    date: "May 2024",
    path: "/certifications/frontend_mooc.pdf",
  },

  // Add more
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section" data-aos="fade-up">
      <h2 className="section-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index} data-aos="zoom-in">
            <Award className="icon" />
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <iframe
              src={cert.path}
              title={cert.title}
              width="100%"
              height="400px"
              style={{ border: "1px solid #ccc", borderRadius: "8px", marginTop: "1rem" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
