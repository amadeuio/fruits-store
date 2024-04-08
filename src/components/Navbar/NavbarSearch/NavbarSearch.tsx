import { useStoreContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import styles from "./NavbarSearch.module.css";
import SearchIcon from "../../../icons/SearchIcon";

const NavbarSearch = () => {
  const { filters, setFilters } = useStoreContext();
  const { query } = filters;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setFilters({ ...filters, query: newQuery });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/store");
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
