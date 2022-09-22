import React from "react";
import CardProject from "../components/CardProject";
import styles from "../styles/Project.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 data-entete="Projet" id="Project">
          Derniers Travaux
        </h2>
      </div>
      <Slider {...settings} className={styles.content}>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </Slider>
    </div>
  );
}

export default Project;
