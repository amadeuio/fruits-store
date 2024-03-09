import styles from "./Navbar.module.css";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarFavorite from "./NavbarFavorite/NavbarFavorite";
import NavbarBag from "./NavbarBag/NavbarBag";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h1>fruits.</h1>
      </Link>
      <NavbarLinks />
      <div className={styles.rightContainer}>
        <NavbarSearch />
        <NavbarFavorite />
        <NavbarBag />
      </div>
    </nav>
  );
};

export default Navbar;
