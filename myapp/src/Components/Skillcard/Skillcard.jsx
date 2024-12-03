import styles from "./Skillcard.module.css";
export default function Skillcard({ iconUrl, title, isActive, onClick }) {
  return (
    <div>
      <div
        className={`${styles.card} ${isActive ? styles.active : ""}`}
        onClick={() => onClick()}
      >
        <div className={styles.cardIcon}>
          <img src={iconUrl} />
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}
