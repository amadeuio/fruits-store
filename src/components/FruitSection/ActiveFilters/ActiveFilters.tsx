import { useStoreContext } from "../../../Context";
import styles from "./ActiveFilters.module.css";
import getCheckedFilters from "../../../utils/getCheckedFilters";
import CloseIcon from "../../../icons/CloseIcon";

const ActiveFilters = () => {
  const { filters, setFilters } = useStoreContext();
  const { colors, families, vitamins, query } = filters;

  const handleCloseClick = (filterName) => {
    const updatedFilters = {
      ...filters,
      colors: colors.map((color) =>
        color.name === filterName ? { ...color, isChecked: false } : color
      ),
      families: families.map((family) =>
        family.name === filterName ? { ...family, isChecked: false } : family
      ),
      vitamins: vitamins.map((vitamin) =>
        vitamin.name === filterName ? { ...vitamin, isChecked: false } : vitamin
      ),
    };

    setFilters(updatedFilters);
  };

  const handleCloseQuery = () => {
    setFilters({ ...filters, query: "" });
  };

  const checkedFilters = getCheckedFilters(filters);

  if (!checkedFilters.length && !query) return null;

  return (
    <div className={styles.activeFilters}>
      {checkedFilters.map((filter) => (
        <div key={filter.name} className={styles.activeFilter}>
          {filter.name}
          <div className={styles.closeButton} onClick={() => handleCloseClick(filter.name)}>
            <CloseIcon className={styles.closeIcon} />
          </div>
        </div>
      ))}

      {query && (
        <div className={styles.activeFilter}>
          "{query}"
          <div className={styles.closeButton} onClick={() => handleCloseQuery()}>
            <CloseIcon className={styles.closeIcon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveFilters;
