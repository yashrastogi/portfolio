const experienceData = [
  {
    company: "Ernst & Young",
    date: "January 2020 – July 2020",
    subtitle: "Summer Trainee / Risk Advisory - Cybersecurity",
    description: `Handled vulnerability management lifecycle for new nodes onboarding,
    researched SIEM use cases for telecom nodes, and audited data for
    compliance with ISO 27001 ISMS framework.`,
  },
];

const educationData = [
  {
    name: "NIIT University",
    date: "2016 - Present",
    subtitle: "Bachelor of Technology in Computer Science",
    score: "7.85 CGPA",
  },
  {
    name: "Delhi Public School Gurgaon",
    date: "2013-2015",
    subtitle: "Class Xth - XIIth",
    score: "",
  },
];

const skillsData = [
  "Flutter, Dart",
  "React, Redux",
  "Node.js, MongoDB",
  "Burp Suite, Acunetix",
  "nmap, SQLi",
  "Java - Spring MVC, Servlets, Swing, Core, Android Development",
  "C",
  "JavaScript, TypeScript, jQuery",
  "Python",
  "MATLAB",
  "Bash Shell",
];

const aboutString = `
I have knowledge over vast domains of computer science viz.
Artificial Intelligence, Cyber Security, Full Stack Web and Software
Development and Database Systems which helps me to combine these
skills at will. I can easily grasp technical skills and work with
the latest technologies and practices. I intend to work with passion
and commitment and hope to grow my career prospects while adding
value to the organization.
`;

const projectsData = [
  {
    image: process.env.PUBLIC_URL + "/images/project.jpg",
    name: "Cloudy Cloud Storage Web SPA",
    description: `Built a cloud storage application with MD5 hash based
    deduplication on the MongoDB - Express - ReactJS - Node.js stack`,
    link: "https://nu-capstone-project.github.io/cloudy/#/",
    linkType: "project",
  },
  {
    image: process.env.PUBLIC_URL + "/images/project.jpg",
    name: "Android Video Encryption and Sharing App",
    description: `Created a secure video sharing app in which a user can share their
    videos protected by AES encryption.`,
    link: "https://github.com/yashrastogi/securivo",
    linkType: "source",
  },
  {
    image: process.env.PUBLIC_URL + "/images/project.jpg",
    name: "Restaurant Management/Food Ordering App",
    description: `Developed a food ordering app for our local campus cafe that
    allows the cafe to take orders remotely.`,
    link: "https://github.com/yashrastogi/CampusCafe",
    linkType: "source",
  },
  {
    image: process.env.PUBLIC_URL + "/images/project.jpg",
    name: "Chess Web App",
    description: `Developed a Chess game using web technologies which allows the
    user to play the game anywhere and on any device.`,
    link: "https://yashrastogi.github.io/chessboard",
    linkType: "project",
  },
  {
    image: process.env.PUBLIC_URL + "/images/project.jpg",
    name: "DES Swing",
    description: `Manually implemented the DES algorithm utilising Java and Swing
    framework that enables the user to encrypt text using DES
    algorithm.`,
    link: "https://github.com/yashrastogi/DES-Swing",
    linkType: "source",
  },
  {
    image: process.env.PUBLIC_URL + "/images/project.jpg",
    name: "Research & Development - Improving University network performance",
    description: `Performed analysis on campus wireless network and improved
    performance.`,
    linkType: "none",
  },
];

export { aboutString, projectsData, experienceData, educationData, skillsData };
