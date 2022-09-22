import React from "react";
import FormInput from "../components/FormInput";
import styles from "../styles/Contact.module.scss";

function Contact() {
  return (
    <div className={styles.container} id="Contact">
      <div className={styles.title}>
        <h2 data-entete="Contact">Prendre contact</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.blocInput}>
          <FormInput type="text" placeholder="Nom" name="nom" />
          <FormInput type="text" placeholder="Email" name="email" />
          <FormInput type="text" placeholder="Sujet" name="sujet" />
        </div>
        <div className={styles.blocTextarea}>
          <div className={styles.groupeTextarea}>
            <div className={styles.survol}>
              <textarea className={styles.textarea} placeholder="Message" />
            </div>
          </div>
          <div className={styles.groupeBouton}>
            <div className={styles.survol}>
              <button type="submit" className={styles.bouton}>
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
