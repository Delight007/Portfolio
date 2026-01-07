import { useContext, useState } from "react";
import {
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaLightbulb,
  FaLock,
  FaMobileAlt,
  FaTools,
  FaUserFriends,
} from "react-icons/fa";
import {
  SiCloudinary,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GlobalContext } from "../context/GlobalContext";

// For missing icons, you can use these alternatives
// Install if needed: npm install react-icons/fi react-icons/io5
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function Skills() {
  const { setSelectSkill, selectSkill } = useContext(GlobalContext);

  // Custom icon component for missing icons
  const AppwriteIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FD366E" />
      <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="#FD366E" />
      <path d="M2 12L12 17L22 12L12 7L2 12Z" fill="#FD366E" />
    </svg>
  );

  const ZustandIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );

  const SwiperIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z" />
    </svg>
  );

  // Updated SKILLS array with corrected icon names
  const SKILLS = [
    {
      title: "Frontend",
      icon: <SiReact className="w-6 h-6" />,
      skills: [
        { skill: "Next.js", percentage: "95%", icon: <SiNextdotjs /> },
        { skill: "React.js", percentage: "95%", icon: <SiReact /> },
        {
          skill: "React Native",
          percentage: "85%",
          icon: <IoPhonePortraitOutline />,
        },
        { skill: "TypeScript", percentage: "90%", icon: <SiTypescript /> },
        { skill: "JavaScript", percentage: "95%", icon: <SiJavascript /> },
        { skill: "Tailwind CSS", percentage: "95%", icon: <SiTailwindcss /> },
        { skill: "HTML5", percentage: "98%", icon: <SiHtml5 /> },
        { skill: "CSS3", percentage: "98%", icon: <SiCss3 /> },
        { skill: "Material-UI", percentage: "85%", icon: <SiMui /> },
      ],
    },
    {
      title: "Backend",
      icon: <SiNodedotjs className="w-6 h-6" />,
      skills: [
        { skill: "Node.js", percentage: "90%", icon: <SiNodedotjs /> },
        { skill: "Express.js", percentage: "90%", icon: <SiExpress /> },
        { skill: "PHP", percentage: "75%", icon: <SiPhp /> },
        { skill: "RESTful APIs", percentage: "92%", icon: <TbApi /> },
        { skill: "JWT Authentication", percentage: "88%", icon: <FaLock /> },
        { skill: "Firebase Auth", percentage: "85%", icon: <SiFirebase /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="w-6 h-6" />,
      skills: [
        { skill: "Firebase", percentage: "85%", icon: <SiFirebase /> },
        { skill: "MongoDB", percentage: "80%", icon: <SiMongodb /> },
        { skill: "MySQL", percentage: "75%", icon: <SiMysql /> },
        { skill: "Appwrite", percentage: "70%", icon: <AppwriteIcon /> },
      ],
    },
    {
      title: "State Management",
      icon: <SiRedux className="w-6 h-6" />,
      skills: [
        { skill: "Zustand", percentage: "85%", icon: <ZustandIcon /> },
        { skill: "React Query", percentage: "80%", icon: <SiReact /> },
        { skill: "Context API", percentage: "90%", icon: <FaCode /> },
        { skill: "Redux", percentage: "75%", icon: <SiRedux /> },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools className="w-6 h-6" />,
      skills: [
        { skill: "Git & GitHub", percentage: "95%", icon: <SiGithub /> },
        { skill: "Vercel", percentage: "90%", icon: <SiVercel /> },
        { skill: "Netlify", percentage: "85%", icon: <SiNetlify /> },
        { skill: "Expo", percentage: "80%", icon: <SiExpo /> },
        { skill: "Cloudinary", percentage: "75%", icon: <SiCloudinary /> },
        { skill: "Framer Motion", percentage: "85%", icon: <SiFramer /> },
        { skill: "Swiper.js", percentage: "80%", icon: <SwiperIcon /> },
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUserFriends className="w-6 h-6" />,
      skills: [
        { skill: "API Integration", percentage: "95%", icon: <TbApi /> },
        {
          skill: "Authentication Systems",
          percentage: "90%",
          icon: <FaLock />,
        },
        {
          skill: "Real-time Communication",
          percentage: "85%",
          icon: <SiSocketdotio />,
        },
        {
          skill: "Responsive Design",
          percentage: "95%",
          icon: <FaMobileAlt />,
        },
        { skill: "Problem-solving", percentage: "90%", icon: <FaLightbulb /> },
        {
          skill: "Team Collaboration",
          percentage: "92%",
          icon: <FaUserFriends />,
        },
        { skill: "SMTP Integration", percentage: "85%", icon: <FaEnvelope /> },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(SKILLS[0]);

  function handleClick(data) {
    setActiveCategory(data);
    setSelectSkill(data);
  }

  // Technology stack for quick view
  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
    { name: "React", icon: <SiReact className="w-8 h-8" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
    { name: "Firebase", icon: <SiFirebase className="w-8 h-8" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8" /> },
    { name: "Express", icon: <SiExpress className="w-8 h-8" /> },
    { name: "Git", icon: <SiGit className="w-8 h-8" /> },
    { name: "Vercel", icon: <SiVercel className="w-8 h-8" /> },
    { name: "Figma", icon: <SiFigma className="w-8 h-8" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="w-8 h-8" /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">
              Technical Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Technical
            </span>{" "}
            Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive collection of technologies and tools I use to build
            modern, scalable web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Categories */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {SKILLS.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleClick(item)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                    activeCategory.title === item.title
                      ? "bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-2 border-purple-500 shadow-2xl shadow-purple-500/20"
                      : "bg-gray-900/30 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/50"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      activeCategory.title === item.title
                        ? "bg-gradient-to-br from-purple-600 to-blue-600"
                        : "bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className={`font-semibold text-lg ${
                        activeCategory.title === item.title
                          ? "text-white"
                          : "text-gray-300"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.skills.length} skills
                    </p>
                  </div>
                  <div
                    className={`w-2 h-8 rounded-full transition-colors ${
                      activeCategory.title === item.title
                        ? "bg-gradient-to-b from-purple-400 to-cyan-400"
                        : "bg-gray-700 group-hover:bg-purple-500/50"
                    }`}
                  ></div>
                </button>
              ))}
            </div>

            {/* Tech Stack Overview */}
            <div className="mt-8 p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                  "Tailwind",
                  "Firebase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills Details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 lg:p-8 h-full">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {activeCategory.title}
                  </h3>
                  <p className="text-gray-400">
                    Detailed proficiency breakdown
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-gray-700">
                  {activeCategory.icon}
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {activeCategory.skills.map((item, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-600 transition-colors">
                          {item.icon}
                        </div>
                        <span className="font-medium text-gray-200">
                          {item.skill}
                        </span>
                      </div>
                      <span className="text-purple-400 font-semibold">
                        {item.percentage}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: item.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-xl bg-gray-900/30 border border-gray-800">
                    <div className="text-2xl font-bold text-white mb-2">2+</div>
                    <div className="text-sm text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-900/30 border border-gray-800">
                    <div className="text-2xl font-bold text-white mb-2">8+</div>
                    <div className="text-sm text-gray-400">Projects Built</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-900/30 border border-gray-800">
                    <div className="text-2xl font-bold text-white mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-purple-500/50 transition-colors group"
              >
                <div className="text-purple-400 group-hover:text-cyan-400 transition-colors mb-2">
                  {tech.icon}
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
