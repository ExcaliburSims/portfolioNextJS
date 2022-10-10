import React, { useEffect, useState } from "react";
import CardProject from "../components/CardProject";
import styles from "../styles/Project.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data.json";

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
  /* data.projects.map((dat) => console.log(dat.id));
  data.projects.map((dayte) => console.log(dayte.project_image)); */

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 data-entete="Projet" id="Project">
          Derniers Travaux
        </h2>
      </div>
      <Slider {...settings} className={styles.content}>
        {data.projects.map((datas) => (
          <CardProject
            key={datas.id}
            title={datas.project_title}
            pic={datas.project_image}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Project;
