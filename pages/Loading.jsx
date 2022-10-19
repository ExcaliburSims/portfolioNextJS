import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import styles from "../styles/Loading.module.scss";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InfinitySpin width="400" color="#fb839e" />;
      </div>
    </div>
  );
};

export default Loading;
