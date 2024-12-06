import Frontend from "../utilis/icon/frontendR.png";
import Backend from "../utilis/icon/backend.png";
import Tools from "../utilis/icon/tools.png";
import skills from "../utilis/icon/skills.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: Frontend,
    id: 2,
    skills: [
      { skill: "HTML5", percentage: "95%" },
      { skill: "CSS3,(Sass, Scss)", percentage: "90%" },
      { skill: "Javascript", percentage: "70%" },
      { skill: "React js ", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: Backend,
    id: 2,
    skills: [
      { skill: "Node js", percentage: "65%" },
      { skill: "Next js", percentage: "65%" },
    ],
  },
  {
    title: "Tools",
    icon: Tools,
    id: 3,
    skills: [
      { skill: "Visual Studio Code", percentage: "90%" },
      { skill: "Git & Gitup", percentage: "85%" },
      { skill: "Webpack", percentage: "70%" },
      { skill: "Responsive Design ", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: skills,
    id: 4,
    skills: [
      { skill: "Problem-Solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Details", percentage: "70%" },
    ],
  },
];
export const WorkExperiences = [
  {
    title: " Software Developer || Innovative Tech Solutions - New York, NY",
    date: "June 2021 - Present",
    responsibility: [
      " Designed and developed a customer feedback system, increasing user engagement by 35%.",
      " Collaborated with cross-functional teams to implement cloud-based solutions, reducing infrastructure costs by 20%.",
      " Automated the deployment process, cutting release times by 50%.",
    ],
    tools: "Technologies/Skills Used: JavaScript, React, Node.js, Docker, AWS",
  },
  {
    title: "Intern - Web Development Bright Start Inc. - San Francisco, CA",
    date: "January 2020 - May 2021",
    responsibility: [
      " Assisted in creating dynamic and responsive websites, leading to a 15% increase in client acquisition.",
      " Improved page load speed by 40% through code optimization and caching strategies.",
      " Wrote technical documentation to streamline team workflows.",
    ],
    tools: "Technologies/Skills Used: HTML, CSS, JavaScript, PHP",
  },
  {
    title: " Frontend Developer Creative Digital Agency - Austin, TX",
    date: "April 2016 - June 2019",
    responsibility: [
      " Developed over 50 responsive websites and landing pages for high-profile clients, ensuring pixel-perfect designs.",
      " Optimized website performance, achieving a 95+ score in Google Lighthouse audits across all projects.",
      " Collaborated with designers and backend developers to integrate RESTful APIs seamlessly.",
    ],
    tools: "Technologies/Skills Used: Angular, HTML5, CSS3, SASS, Gulp",
  },
  {
    title: "Senior Software Engineer Tech Innovators Ltd. - San Francisco, CA",
    date: "July 2019 - Present",
    responsibility: [
      " Spearheaded the development of a scalable e-commerce platform, handling 1M+ monthly users, resulting in a 20% increase in transactions.",
      " Integrated third-party APIs to enhance payment processing and inventory management, reducing errors by 30%.",
      " Mentored a team of 8 junior developers, improving overall productivity and code quality.",
    ],
    tools:
      "Technologies/Skills Used: React, Node.js, PostgreSQL, Kubernetes, Jenkin",
  },
];
