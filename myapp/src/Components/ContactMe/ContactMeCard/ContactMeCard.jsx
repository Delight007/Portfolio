import styles from "./ContactMeCard.module.css";
export default function ContactMeCard({ urlLink, text }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_content}>
        <div className={styles.icon}>
          <img className={styles.img} src={urlLink} alt={text} />
        </div>
        <div className={styles.p}>{text}</div>
      </div>
    </div>
  );
}
