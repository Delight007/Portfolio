import { useEffect, useState } from "react";
import { AiOutlineX } from "react-icons/ai";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import profile from "../img/profile2.jpg";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Front-End Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen flex items-center py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Open to Opportunities
            </div>

            {/* Title with Animated Role */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Gana Lafiya
                </span>
                <br />
                Levi
              </h1>
              <div className="flex items-center gap-3 text-2xl text-gray-300 mb-6 h-10">
                <div className="relative w-64 h-10">
                  {roles.map((role, index) => (
                    <div
                      key={role}
                      className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${
                        index === currentRoleIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {role}
                        <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              I build exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive. Let's bring your ideas to life
              with modern web technologies.
            </p>

            {/* Quick Intro Points */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-300">
                  2+ years of professional experience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">
                  8+ projects delivered successfully
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">
                  Specialized in React & Next.js ecosystems
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <FiMail className="group-hover:scale-110 transition-transform" />
                Contact Me
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-700 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
              >
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://github.com/Delight007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/levi-gana-462102348/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/levi_gana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <AiOutlineX className="w-5 h-5" />
              </a>
              <div className="ml-4 pl-4 border-l border-gray-800">
                <a
                  href="mailto:ganalafiyalevi@gmail.com"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  ganalafiyalevi@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="relative">
            {/* Main Profile Image */}
            <div className="relative mx-auto max-w-md">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img
                    src={profile}
                    alt="Gana Lafiya Levi"
                    className="w-full h-auto rounded-2xl shadow-2xl border-4 border-gray-800 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-4 -right-4 animate-float">
                  <TechBadge
                    icon={<SiNextdotjs className="w-6 h-6 text-white" />}
                    label="Next.js"
                    bgColor="bg-gradient-to-br from-gray-900 to-black"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 animate-float animation-delay-1000">
                  <TechBadge
                    icon={<SiTypescript className="w-6 h-6 text-blue-400" />}
                    label="TypeScript"
                    bgColor="bg-gradient-to-br from-blue-900/40 to-blue-900/20"
                  />
                </div>
                <div className="absolute top-1/2 -right-8 animate-float animation-delay-2000">
                  <TechBadge
                    icon={<SiReact className="w-6 h-6 text-cyan-400" />}
                    label="React"
                    bgColor="bg-gradient-to-br from-cyan-900/40 to-cyan-900/20"
                  />
                </div>
                <div className="absolute bottom-8 -left-8 animate-float animation-delay-3000">
                  <TechBadge
                    icon={<SiTailwindcss className="w-6 h-6 text-teal-400" />}
                    label="Tailwind"
                    bgColor="bg-gradient-to-br from-teal-900/40 to-teal-900/20"
                  />
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 -z-10 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Experience Card */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-2xl w-4/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Experience</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      3+
                    </p>
                    <p className="text-xs text-gray-500">Years</p>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Projects</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      50+
                    </p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Satisfaction</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      100%
                    </p>
                    <p className="text-xs text-gray-500">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Tech Badge Component with Label */
function TechBadge({ icon, label, bgColor }) {
  return (
    <div className="group relative">
      <div
        className={`${bgColor} backdrop-blur-sm p-3 rounded-full border border-gray-700 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-cyan-500`}
      >
        {icon}
      </div>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
        <div className="bg-gray-900 text-xs text-white px-2 py-1 rounded border border-gray-700">
          {label}
        </div>
      </div>
    </div>
  );
}
