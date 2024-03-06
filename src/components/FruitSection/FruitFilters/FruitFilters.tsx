import styles from "./FruitFilters.module.css";
import { useAppContext } from "../../../Context";
import getCheckedFilters from "../../../utils/getCheckedFilters";
import CloseIcon from "../../../icons/CloseIcon";

const FruitFilters = () => {
  const { filters, setFilters } = useAppContext();
  const { colors, families, vitamins } = filters;

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

  const checkedFilters = getCheckedFilters(filters);

  if (!checkedFilters.length) return null;

  return (
    <div className={styles.fruitFilters}>
      {checkedFilters.map((filter) => (
        <div key={filter.name} className={styles.fruitFilter}>
          {filter.name}
          <div className={styles.closeButton} onClick={() => handleCloseClick(filter.name)}>
            <CloseIcon className={styles.closeIcon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FruitFilters;
