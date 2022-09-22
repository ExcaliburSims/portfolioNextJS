import React from "react";
import styles from "../styles/FormInput.module.scss";

function FormInput(props) {
  return (
    <div className={styles.groupeInput}>
      <div className={styles.survol}>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className={styles.input}
        />
      </div>
      {/* <div class="groupe--input --ombreExterieure survol"> */}
    </div>
  );
}

export default FormInput;
