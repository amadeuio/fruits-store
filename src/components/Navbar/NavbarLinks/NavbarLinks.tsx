import { Link } from "react-router-dom";
import styles from "./NavbarLinks.module.css";

const NavbarLinks = () => {
  return (
    <ul className={styles.navbarLinks}>
      <li className={styles.link}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.link}>
        <Link to="store">Store</Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
