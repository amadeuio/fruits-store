import { useStoreContext } from "../../../Context";
import { Link } from "react-router-dom";
import styles from "./NavbarLinks.module.css";

const NavbarLinks = () => {
  const { filters, setFilters } = useStoreContext();

  const handleStoreClick = () => {
    const updatedFilters = { ...filters, favorite: false };
    setFilters(updatedFilters);
  };

  return (
    <ul className={styles.navbarLinks}>
      <li className={styles.link}>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </li>
      <li className={styles.link} onClick={handleStoreClick}>
        <Link to="/store">
          <h3>Store</h3>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
