import { useState } from "react";
import styles from "./NavbarFavorite.module.css";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import { useFruitsContext } from "../../../Context";

const NavbarFavorite = () => {
  const { fruits, setFruits } = useFruitsContext();
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavoriteOpen(!isFavoriteOpen);

    if (!isFavoriteOpen) {
      const updatedFruits = fruits.map((f) => ({
        ...f,
        isDisplayed: f.isFavorite,
      }));

      setFruits(updatedFruits);
    } else {
      const updatedFruits = fruits.map((f) => ({
        ...f,
        isDisplayed: true,
      }));

      setFruits(updatedFruits);
    }
  };

  const favoriteFruits = fruits.filter((fruit) => fruit.isFavorite);

  return (
    <div className={styles.navbarFavorite}>
      <FavoriteIcon
        className={`${styles.favorite} ${isFavoriteOpen ? styles.clicked : ""}`}
        isFilled={isFavoriteOpen}
        onClick={handleFavoriteClick}
      />
      <div className={styles.number}>{favoriteFruits.length}</div>
    </div>
  );
};

export default NavbarFavorite;
