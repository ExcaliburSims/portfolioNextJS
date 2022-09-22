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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 data-entete="Projet">Derniers Travaux</h2>
      </div>
      {/* <div className={styles.content}>
      <div>*/}
      <Slider {...settings} className={styles.content}>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    /* </div>
    </div> */
  );
}

export default Project;
