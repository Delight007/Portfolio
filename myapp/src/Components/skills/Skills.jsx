import { useContext, useState } from "react";
import Skillcard from "../Skillcard/Skillcard";
import SkillsIconInfo from "../SkillsIconInfo/SkillsIconInfo";
import styles from "./Skills.module.css";
import { GlobalContext } from "../context/GlobalContext";
export default function Skills() {
  const { setSelectSkill, selectSkill, SKILLS } = useContext(GlobalContext);
  function handleClick(data) {
    setSelectSkill(data);
  }
  return (
    <section id="skills" className={styles.Skills_container}>
      <h5>Technical Proficiency</h5>
      <div className={styles.Skills_content}>
        <div className={styles.Skills}>
          {SKILLS.map((item) => (
            <Skillcard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectSkill.title === item.title}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
        <div className={styles.skillsInfo}>
          <SkillsIconInfo />
        </div>
      </div>
    </section>
  );
}
