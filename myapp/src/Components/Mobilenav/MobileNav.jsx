import styles from "./MobileNav.module.css";
export default function MobileNav({ openMenu, toggleMenu, smoothScrollToSection }) {
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
            <a onClick={(e) => { e.preventDefault(); smoothScrollToSection('hero'); toggleMenu(); }}>Home</a>
            <a onClick={(e) => { e.preventDefault(); smoothScrollToSection('skills'); toggleMenu(); }}>Skils</a>
            <a onClick={(e) => { e.preventDefault(); smoothScrollToSection('projects'); toggleMenu(); }}>Projects</a>
            <a onClick={(e) => { e.preventDefault(); smoothScrollToSection('contact'); toggleMenu(); }}>Contact Me</a>
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
