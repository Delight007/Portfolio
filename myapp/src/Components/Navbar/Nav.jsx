import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import styles from "./Nav.module.css";
import { useState } from "react";
import MobileNav from "../Mobilenav/MobileNav";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <>
      <MobileNav openMenu={openMenu} toggleMenu={toggleMenu} />
      <nav className={styles.nav}>
        <div className={styles.nav_content}>
          <h1 className={styles.head}>
            Gani <span>X</span>
          </h1>
          <div className={styles.links}>
            <a href="/">Home</a>
            <a href="/skills">Skils</a>
            <a href="/workExperience">Work Experience</a>
            <a href="/contact">Contact Me</a>
            <button className={styles.btn}>Hire me</button>
          </div>
          <button className={styles.btn2} onClick={toggleMenu}>
            {openMenu ? <FaTimes /> : <IoMenu />}
          </button>
        </div>
      </nav>
    </>
  );
}
