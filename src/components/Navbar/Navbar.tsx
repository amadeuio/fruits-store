import styles from "./Navbar.module.css";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarFavorite from "./NavbarFavorite/NavbarFavorite";
import NavbarBag from "./NavbarBag/NavbarBag";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>fruits.</h1>
          </Link>
        </div>
        <NavbarLinks extraClass={styles.links} />
      </div>
      <div className={styles.navbarRight}>
        <NavbarSearch />
        <div className={styles.rightIcons}>
          <NavbarFavorite />
          <NavbarBag />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
