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
        <CardServices
          title="Application Web"
          icon={laptop}
          description="De la conception au déploiement, je réalise des applications web de divers types."
        />
        <CardServices
          title="Application Mobile"
          icon={mobile}
          description="Android, IOS, Windows je suis dans la mise en oeuvre des applications mobiles sur mesure tournant dans plusieurs plateformes."
        />
        <CardServices
          title="Design Graphique"
          icon={palette}
          description="UX & UI, je réalise des designs tenant compte des règles et principes pour une bonne expérience utilisateur."
        />
        <CardServices
          title="Clean Code"
          icon={code}
          description="J’assure la maintenance des codes déjà existants en les optimisants avec les bonnes pratiques pour une bonne complexité."
        />
        <CardServices
          title="Seo Marketing"
          icon={Seo}
          description="J’aide les tiers avec des techniques d’optimisation pour les moteurs de recherche à la mise en oeuvre de l'amélioration du positionnement de leur site web ou application web."
        />
      </div>
    </div>
  );
}

export default Service;
