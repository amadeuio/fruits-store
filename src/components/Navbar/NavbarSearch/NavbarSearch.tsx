import { useState } from "react";
import styles from "./NavbarSearch.module.css";
import SearchIcon from "../../../icons/SearchIcon";

const NavbarSearch = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // use a prop function here?
  };

  return (
    <form className={styles.navbarSearch} onSubmit={handleSubmit}>
      <SearchIcon className={styles.searchIcon} />
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

export default NavbarSearch;
