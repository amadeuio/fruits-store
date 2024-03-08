import { useAppContext } from "../../Context";
import styles from "./FruitSection.module.css";
import filterFruits from "../../utils/filterFruits";

import FruitItem from "./FruitItem/FruitItem";
import ActiveFilters from "./ActiveFilters/ActiveFilters";

const FruitSection = () => {
  const { fruits, filters } = useAppContext();

  const filteredFruits = filterFruits(fruits, filters);

  return (
    <>
      <div className={styles.fruitSection}>
        <h2 className={styles.title}>
          Items ({filteredFruits.length}){" "}
          {filters.favorite && (
            <span className={styles.favoritesTitle}>
              <span className={styles.emDash}>—</span> Favorites
            </span>
          )}
        </h2>
        <ActiveFilters />
        <div className={styles.fruitGrid}>
          {filteredFruits.map((fruit) => (
            <FruitItem key={fruit.id} fruit={fruit} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FruitSection;
