import React, { useRef } from "react";
import FormInput from "../components/FormInput";
import styles from "../styles/Contact.module.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        form.current,
        process.env.EMAIL_JS_USER,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div className={styles.container} id="Contact">
      <div className={styles.title}>
        <h2 data-entete="Contact">Prendre contact</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className={styles.content}>
        <div className={styles.blocInput}>
          <FormInput type="text" placeholder="Nom" name="nom" id="uer_name" />
          <FormInput
            type="email"
            placeholder="Email"
            name="email"
            id="user_email"
          />
          <FormInput
            type="text"
            placeholder="Sujet"
            name="sujet"
            id="subject"
          />
        </div>
        <div className={styles.blocTextarea}>
          <div className={styles.groupeTextarea}>
            <div className={styles.survol}>
              <textarea
                className={styles.textarea}
                placeholder="Message"
                id="message"
                name="message"
              />
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
      </form>
    </div>
  );
}

export default Contact;
