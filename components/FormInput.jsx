import React from "react";
import styles from "../styles/FormInput.module.scss";

function FormInput(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className={styles.input}
    />
  );
}

export default FormInput;
