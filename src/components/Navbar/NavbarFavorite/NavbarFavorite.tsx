import styles from "./NavbarFavorite.module.css";
import FavoriteIcon from "../../../icons/FavoriteIcon";

const NavbarFavorite = () => {
  return (
    <div className={styles.navbarFavorite}>
      <FavoriteIcon className={styles.favoriteIcon} />
    </div>
  );
};

export default NavbarFavorite;
