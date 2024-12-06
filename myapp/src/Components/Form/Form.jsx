import { useState } from "react";
import styles from "./Form.module.css";
export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.Form_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.nameCont}>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            name="firstname"
            placeholder="  Fisrt Name..."
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            name="lastname"
            placeholder="  Last Name..."
          />
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          name="email"
          placeholder="  Email..."
        />

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          name="message"
          placeholder="  Message"
        ></textarea>

        <button className={styles.btn}> send</button>
      </form>
    </div>
  );
}
