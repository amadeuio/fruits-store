import { useAppContext } from "../../../Context";
import styles from "./NavbarFavorite.module.css";

import FavoriteIcon from "../../../icons/FavoriteIcon";

const NavbarFavorite = () => {
  const { fruits, filters, setFilters } = useAppContext();
  const { favorite } = filters;

  const handleFavoriteClick = () => {
    setFilters({ ...filters, favorite: !favorite });
  };

  const favoriteCount = fruits.filter((fruit) => fruit.isFavorite);

  return (
    <div className={styles.navbarFavorite}>
      <FavoriteIcon
        className={`${styles.favorite} ${favorite ? styles.clicked : ""}`}
        isFilled={favorite}
        onClick={handleFavoriteClick}
      />
      <div className={styles.number}>{favoriteCount.length}</div>
    </div>
  );
};

export default NavbarFavorite;
