import styles from "./Navbar.module.css";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarFavorite from "./NavbarFavorite/NavbarFavorite";
import NavbarBag from "./NavbarBag/NavbarBag";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>fruits.</h1>
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
