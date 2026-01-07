import Form from "../Form/Form";
import styles from "./contact.module.css";
import ContactMeCard from "./ContactMeCard/ContactMeCard";
import email from "./img/email2.png";
import git from "./img/git3.png";
export default function ContactMe() {
  return (
    <section className={styles.Contact_container}>
      <h5>Contact me</h5>
      <div id="contact" className={styles.ContactMe_content}>
        <div style={{ flex: 1 }}>
          <ContactMeCard urlLink={email} text={"ganalafiyalevi@gmail.com"} />
          <ContactMeCard urlLink={git} text={"https://github.com/Delight007"} />
        </div>
        <div style={{ flex: 1 }}>
          <Form />
        </div>
      </div>
    </section>
  );
}
