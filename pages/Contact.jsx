import React from "react";
import FormInput from "../components/FormInput";
import styles from "../styles/Contact.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 data-entete="Contact">Prendre contact</h2>
      </div>
      <div>
        <FormInput type="text" placeholder="nom" name="nom" />
      </div>
    </div>
  );
}

export default Contact;
