import React from "react";
import CardServices from "../components/CardServices";
import styles from "../styles/Service.module.scss";
import stylesCard from "../styles/CardServices.module.scss";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaCode,
  FaSearch,
} from "react-icons/fa";


function Service() {
  let mobile = <FaMobileAlt className={stylesCard.iconpic} />;
  let laptop = <FaLaptopCode className={stylesCard.iconpic} />;
  let palette = <FaPalette className={stylesCard.iconpic} />;
  let code = <FaCode className={stylesCard.iconpic} />;
  let Seo = <FaSearch className={stylesCard.iconpic} />;
  return (
    <div className={styles.container} id="Service">
      <div className={styles.title}>
        <h2 data-entete="Services">Qu'est-ce que je fais ?</h2>
      </div>
      <div className={styles.content}>
        <CardServices title="Application Web" icon={laptop} />
        <CardServices title="Application Mobile" icon={mobile} />
        <CardServices title="Design Graphique" icon={palette} />
        <CardServices title="Clean Code" icon={code} />
        <CardServices title="Seo Marketing" icon={Seo} />
        <CardServices title="Great Support" icon={mobile} />
      </div>
    </div>
  );
}

export default Service;
