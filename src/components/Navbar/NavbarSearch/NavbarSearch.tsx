import { useAppContext } from "../../../Context";
import styles from "./NavbarSearch.module.css";

import SearchIcon from "../../../icons/SearchIcon";

const NavbarSearch = () => {
  const { filters, setFilters } = useAppContext();
  const { query } = filters;

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setFilters({ ...filters, query: newQuery });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission if needed
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
