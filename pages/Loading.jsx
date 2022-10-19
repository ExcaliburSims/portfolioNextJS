import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import styles from "../styles/Loading.module.scss";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <InfinitySpin width="400" color="#fb839e" />;
    </div>
  );
};

export default Loading;
