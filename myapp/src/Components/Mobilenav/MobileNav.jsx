import styles from "./MobileNav.module.css";
export default function MobileNav({ openMenu, toggleMenu }) {
  return (
    <>
      <div
        className={`${styles.menu_content} ${openMenu ? styles.active : " "}`}
        onClick={toggleMenu}
      >
        <div className={styles.content}>
          <h1>
            Gani <span>X</span>
          </h1>
          <div className={styles.links}>
            <a href="/">Home</a>
            <a href="/skills">Skils</a>
            <a href="/workExperience">Work Experience</a>
            <a href="/contact">Contact Me</a>
            <button className={styles.btn}>Hire me</button>
          </div>
          {/* <button className={styles.btn2} onClick={toggleMenu}>
          {openMenu ? <FaTimes /> : <IoMenu />}
        </button> */}
        </div>
      </div>
    </>
  );
}
