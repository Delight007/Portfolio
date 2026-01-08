import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiCheckCircle,
  FiChevronRight,
  FiCodesandbox,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiMessageSquare,
  FiShoppingCart,
  FiSmartphone,
  FiStar,
} from "react-icons/fi";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Evoting from "../img/Evoting.jpeg";
import form from "../img/form.jpeg";
import G_express from "../img/G_express.jpeg";
import Krea from "../img/krea.jpeg";

// Project images - Replace these with your actual screenshots
const PROJECT_IMAGES = {
  ecommerce: G_express,
  tribtalk:
    "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&auto=format&fit=crop",
  evoting: Evoting,
  contactform: form,
  kreai: Krea,
};

// Your actual projects data
const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "Built responsive e-commerce platform with product management, cart, checkout, and shipping calculations. Used React Query for performance optimization and deployed on Vercel.",
    shortDescription: "Full-featured online shopping platform",
    image: PROJECT_IMAGES.ecommerce,
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "React Query",
    ],
    category: "fullstack",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://e-commerce-alpha-lemon-48.vercel.app",
    featured: true,
    stars: 42,
    views: 1200,
    status: "Live",
    icon: <FiShoppingCart className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "TribeTalk Chat App",
    description:
      "Real-time chat application with Socket.IO and JWT authentication. Designed responsive UI with online/offline status indicators. Built with React Native for cross-platform compatibility.",
    shortDescription: "Real-time messaging application",
    image: PROJECT_IMAGES.tribtalk,
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],
    category: "mobile",
    github: "https://github.com/yourusername/tribtalk",
    live: null,
    featured: true,
    stars: 35,
    views: 980,
    status: "In Development",
    icon: <FiMessageSquare className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "E-Voting System",
    description:
      "Secure voting platform with user authentication and vote tracking. Implemented data security measures with Firebase authentication and real-time vote counting.",
    shortDescription: "Secure digital voting platform",
    image: PROJECT_IMAGES.evoting,
    technologies: ["React.js", "Firebase", "CSS"],
    category: "fullstack",
    github: "https://github.com/yourusername/evoting",
    live: "https://e-voting-kappa.vercel.app/",
    featured: true,
    stars: 28,
    views: 750,
    status: "Live",
    icon: <FiCheckCircle className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Contact Form System",
    description:
      "Secure contact form implementation with email notifications using PHP and SMTP integration. Includes MySQL database for message storage and anti-spam protection.",
    shortDescription: "Secure PHP contact form with email",
    image: PROJECT_IMAGES.contactform,
    technologies: ["HTML", "CSS", "PHP", "MySQL", "SMTP"],
    category: "fullstack",
    github: "https://github.com/yourusername/contact-form",
    live: "https://contact-form-9e94.vercel.app/",
    featured: false,
    stars: 19,
    views: 520,
    status: "Live",
    icon: <FiMail className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Krea AI Content Creator",
    description:
      "Modern UI design for AI-powered content creation platform. Built with Next.js and TypeScript for optimal performance and SEO optimization.",
    shortDescription: "AI content creation platform UI",
    image: PROJECT_IMAGES.kreai,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/yourusername/kreai",
    live: "https://webv-beryl.vercel.app/",
    featured: false,
    stars: 24,
    views: 610,
    status: "Live",
    icon: <FiSmartphone className="w-5 h-5" />,
  },
];

const CATEGORIES = [
  {
    id: "all",
    label: "All Projects",
    count: PROJECTS_DATA.length,
    icon: <FiCodesandbox />,
  },
  {
    id: "featured",
    label: "Featured",
    count: PROJECTS_DATA.filter((p) => p.featured).length,
    icon: <FiStar />,
  },
  {
    id: "fullstack",
    label: "Full Stack",
    count: PROJECTS_DATA.filter((p) => p.category === "fullstack").length,
    icon: <SiNodedotjs />,
  },
  {
    id: "frontend",
    label: "Frontend",
    count: PROJECTS_DATA.filter((p) => p.category === "frontend").length,
    icon: <SiReact />,
  },
  {
    id: "mobile",
    label: "Mobile",
    count: PROJECTS_DATA.filter((p) => p.category === "mobile").length,
    icon: <FiSmartphone />,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return project.featured;
    return project.category === activeCategory;
  });

  const getTechIcon = (tech) => {
    const iconMap = {
      "Next.js": <SiNextdotjs className="w-4 h-4" />,
      React: <SiReact className="w-4 h-4" />,
      TypeScript: <SiTypescript className="w-4 h-4" />,
      "Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
      "Node.js": <SiNodedotjs className="w-4 h-4" />,
      MongoDB: <SiMongodb className="w-4 h-4" />,
      Firebase: <SiFirebase className="w-4 h-4" />,
      Express: <SiExpress className="w-4 h-4" />,
      "Socket.IO": <SiSocketdotio className="w-4 h-4" />,
      JWT: <SiFirebase className="w-4 h-4" />,
      "React Query": <SiReact className="w-4 h-4" />,
      PHP: <SiPhp className="w-4 h-4" />,
      MySQL: <SiMysql className="w-4 h-4" />,
      SMTP: <FiMail className="w-4 h-4" />,
      HTML: <SiHtml5 className="w-4 h-4" />,
      CSS: <SiCss3 className="w-4 h-4" />,
      "React.js": <SiReact className="w-4 h-4" />,
      JavaScript: <SiJavascript className="w-4 h-4" />,
    };
    return iconMap[tech] || <FiCodesandbox className="w-4 h-4" />;
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 mb-6">
            <FiCodesandbox className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">
              Project Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my practical experience with modern web technologies
            and problem-solving skills
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-5 py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-purple-500 text-white"
                  : "bg-gray-900/30 border-gray-800 text-gray-400 hover:border-purple-500/50 hover:text-white"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="flex items-center gap-2">
                {category.label}
                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${
                    activeCategory === category.id
                      ? "bg-purple-900/50 text-purple-200"
                      : "bg-gray-800 text-gray-500 group-hover:bg-purple-900/30 group-hover:text-purple-200"
                  }`}
                >
                  {category.count}
                </span>
              </span>
              {activeCategory === category.id && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                getTechIcon={getTechIcon}
                isInView={isInView}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-6 text-gray-700">🚧</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-400">
              Check back soon for new projects in this category!
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 w-full"
        >
          {[
            {
              label: "Total Projects",
              value: "8+",
              icon: "🚀",
              color: "from-purple-600 to-pink-600",
            },

            {
              label: "Technologies",
              value: "20+",
              icon: "⚡",
              color: "from-blue-600 to-cyan-600",
            },
            {
              label: "Client Satisfaction",
              value: "100%",
              icon: "🎯",
              color: "from-green-600 to-emerald-600",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 group "
            >
              <div
                className={`text-3xl mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/Delight007"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-gray-800 rounded-xl text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300"
            >
              <FiGithub className="w-5 h-5" />
              View All Projects on GitHub
              <FiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              <FiMail className="w-5 h-5" />
              Need a Similar Project?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({
  project,
  index,
  getTechIcon,
  isInView,
  hoveredProject,
  setHoveredProject,
}) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className="group relative h-full"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute -top-3 left-4 z-20">
          <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
            <FiStar className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Status Badge */}
      {project.status && (
        <div
          className={`absolute -top-3 right-4 z-20 px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1 ${
            project.status === "Live"
              ? "bg-green-900/80 text-green-200 border border-green-700"
              : "bg-yellow-900/80 text-yellow-200 border border-yellow-700"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              project.status === "Live" ? "bg-green-400" : "bg-yellow-400"
            }`}
          ></div>
          {project.status}
        </div>
      )}

      {/* Project Card */}
      <div className="h-full flex flex-col bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-purple-500/50 group-hover:bg-gray-900/50 group-hover:transform group-hover:-translate-y-2">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          {/* Project Icon Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-700">
            {project.icon}
          </div>

          {/* Live Preview Button */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 p-2 bg-black/70 backdrop-blur-sm rounded-lg border border-gray-700 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-900/70 hover:border-purple-500 transform hover:scale-110"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title and Description */}
          <div className="mb-4 flex-grow">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-xs text-gray-500 mb-2">TECH STACK</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-300 group-hover:border-purple-500/30 transition-colors"
                  title={tech}
                >
                  {getTechIcon(tech)}
                  <span className="max-w-[80px] truncate">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats and Links */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            {/* Stats */}
            {/* <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-1 text-gray-400"
                title="GitHub Stars"
              >
                <FiStar className="w-4 h-4" />
                <span className="text-sm">{project.stars}</span>
              </div>
              <div
                className="flex items-center gap-1 text-gray-400"
                title="Views"
              >
                <FiEye className="w-4 h-4" />
                <span className="text-sm">{project.views}</span>
              </div>
            </div> */}

            {/* Links */}
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-900/30 transition-all duration-300"
                title="View Source Code"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub className="w-4 h-4" />
              </a>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-gray-700 rounded-lg text-sm text-white hover:border-purple-500 hover:from-purple-900/60 hover:to-blue-900/60 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Live Demo</span>
                  <FiExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-400 cursor-not-allowed"
                  disabled
                  title="Coming Soon"
                >
                  <span>Coming Soon</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
    </motion.div>
  );
}
