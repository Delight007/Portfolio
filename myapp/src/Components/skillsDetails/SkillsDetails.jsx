import styles from "./SkillsDetails.module.css";
export default function SkillsDetails({ item }) {
  return (
    <div>
      <div className={styles.skills_info}>
        <p>{item.skill}</p>
        <p className={styles.percentage}>{item.percentage}</p>
      </div>
      <div className={styles.skills_progress_bg}>
        <div
          className={styles.skills_progress}
          style={{ width: item.percentage }}
        ></div>
      </div>
    </div>
  );
}
