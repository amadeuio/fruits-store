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
        <Link to="/">
          <h1>fruits.</h1>
        </Link>
        <NavbarLinks />
      </div>
      <div className={styles.navbarRight}>
        <NavbarSearch />
        <NavbarFavorite />
        <NavbarBag />
      </div>
    </nav>
  );
};

export default Navbar;
