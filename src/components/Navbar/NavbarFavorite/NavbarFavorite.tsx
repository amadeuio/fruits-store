import { useAppContext } from "../../../Context";
import styles from "./NavbarFavorite.module.css";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import { Link } from "react-router-dom";

const NavbarFavorite = () => {
  const { fruits, filters, setFilters } = useAppContext();
  const { favorite } = filters;

  const handleFavoriteClick = () => {
    setFilters({ ...filters, favorite: !favorite });
  };

  const favoriteCount = fruits.filter((fruit) => fruit.isFavorite).length;

  return (
    <Link to="/store">
      <div className={styles.navbarFavorite}>
        <FavoriteIcon
          className={`${styles.favorite} ${favorite ? styles.clicked : ""}`}
          isFilled={favorite}
          onClick={handleFavoriteClick}
        />
        <div className={styles.number}>{favoriteCount}</div>
      </div>
    </Link>
  );
};

export default NavbarFavorite;
