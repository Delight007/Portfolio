import { useContext } from "react";
import SkillsDetails from "../skillsDetails/SkillsDetails";
import styles from "./SkillsIconInfo.module.css";
import { GlobalContext } from "../context/GlobalContext";
// import React from "react";
export default function SkillsIconInfo() {
  // use Context
  const { selectSkill } = useContext(GlobalContext);

  const Skills = selectSkill.skills;
  const heading = selectSkill.title;
  return (
    <div className={styles.SkillsIconInfo}>
      <h6>{heading}</h6>
      <div className={styles.skills_content}>
        {Skills.map((item, index) => (
          <SkillsDetails item={item} key={`skill ${index}`} />
        ))}
      </div>
    </div>
  );
}
