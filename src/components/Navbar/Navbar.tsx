import styles from "./Navbar.module.css";
import SearchIcon from "../../icons/SearchIcon";
import BagIcon from "../../icons/BagIcon";
import { useState } from "react";
import FavoriteIcon from "../../icons/FavoriteIcon";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // use a prop function here?
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <SearchIcon className={styles.searchIcon} />
      <input type="text" placeholder="Search" value={query} onChange={handleChange} />
    </form>
  );
};

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>fruits.</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Store
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
      <div className={styles.rightContainer}>
        <SearchBar />
        <div className={styles.favorite}>
          <FavoriteIcon className={styles.favoriteIcon} />
        </div>
        <div className={styles.bag}>
          <BagIcon className={styles.bagIcon} />
          <div className={styles.bagNumber}>2</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
