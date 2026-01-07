import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import MobileNav from "../Mobilenav/mobileNav";
export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <MobileNav openMenu={openMenu} toggleMenu={toggleMenu} />
      <nav className="bg-black/10 mx-auto py-2 sticky top-0 z-30 backdrop-blur-[50px]">
        <div className="max-w-[1300px] flex justify-between items-center p-6 mx-auto">
          <h1 className="w-48 h-auto text-white font-bold text-xl">
            Gan
            <span className="text-[#FFD700] text-lg font-sevillana">A</span>
          </h1>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#hero"
              className="relative mx-4 py-2 text-white font-medium no-underline cursor-pointer transition-all duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 
                         after:bg-gradient-to-r after:from-[#a993fe] after:to-[#7e61e7] 
                         after:opacity-0 after:transition-all after:duration-300 after:w-0
                         hover:after:w-full hover:after:opacity-100"
            >
              Home
            </a>
            <a
              href="#skills"
              className="relative mx-4 py-2 text-white font-medium no-underline cursor-pointer transition-all duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 
                         after:bg-gradient-to-r after:from-[#a993fe] after:to-[#7e61e7] 
                         after:opacity-0 after:transition-all after:duration-300 after:w-0
                         hover:after:w-full hover:after:opacity-100"
            >
              Skills
            </a>
            <a
              href="#workExperience"
              className="relative mx-4 py-2 text-white font-medium no-underline cursor-pointer transition-all duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 
                         after:bg-gradient-to-r after:from-[#a993fe] after:to-[#7e61e7] 
                         after:opacity-0 after:transition-all after:duration-300 after:w-0
                         hover:after:w-full hover:after:opacity-100"
            >
              Work Experience
            </a>
            <a
              href="#contact"
              className="relative mx-4 py-2 text-white font-medium no-underline cursor-pointer transition-all duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 
                         after:bg-gradient-to-r after:from-[#a993fe] after:to-[#7e61e7] 
                         after:opacity-0 after:transition-all after:duration-300 after:w-0
                         hover:after:w-full hover:after:opacity-100"
            >
              Contact Me
            </a>
            <button
              className="px-3 py-1.5 bg-gradient-to-r from-[#a993fe] to-[#7e61e7] border-none 
                             font-medium outline-1 outline-transparent rounded-sm cursor-pointer 
                             transition-all duration-300 text-white
                             hover:text-[#a993fe] hover:outline-[#a993fe] hover:bg-black"
            >
              Hire me
            </button>
          </div>

          <button
            className="w-10 h-8 flex items-center justify-center border-none rounded-md text-white 
                      bg-gradient-to-r from-[#a993fe] to-[#7e61e7] cursor-pointer transition-all duration-300 
                      md:hidden hover:text-[#a993fe] hover:bg-black hover:border hover:border-[#a993fe]"
            onClick={toggleMenu}
          >
            {openMenu ? <FaTimes /> : <IoMenu />}
          </button>
        </div>
      </nav>
    </>
  );
}
