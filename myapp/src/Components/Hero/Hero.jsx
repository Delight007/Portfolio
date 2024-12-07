import styles from "./Hero.module.css";
import reactLogo from "../img/react-logo.png";
import profile from "../img/profile2.jpg";
import htmlLogo from "../img/HTML5_badge.png";
import cssLogo from "../img/css.webp";
import javaLogo from "../img/javascript.webp";
export default function Hero() {
  return (
    <section id="hero" className={styles.content}>
      <div className={styles.m_content}>
        <h2>Code Innovator | Crafting Future-Ready Application </h2>
        <p>
          Passionate Frontend Devloper | Building dynamic and user-friendly web
          applications. I specialize in React and Node.js and strive to create
          solutions that combine functionality with great design."
        </p>
      </div>
      <div className={styles.img}>
        <div>
          <div className={styles.tech_icon}>
            <img src={reactLogo} alt="" />
          </div>
          <img src={profile} className={styles.profile_icon} alt="" />
        </div>
        <div>
          <div className={styles.tech_icon}>
            <img src={htmlLogo} alt="" />
          </div>
          <div className={styles.tech_icon}>
            <img src={cssLogo} alt="" />
          </div>
          <div className={styles.tech_icon}>
            <img src={javaLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
