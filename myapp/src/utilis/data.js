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
