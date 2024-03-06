import { useAppContext } from "../../Context";
import styles from "./FruitSection.module.css";
import filterFruits from "../../utils/filterFruits";

import FruitItem from "./FruitItem/FruitItem";
import FruitFilters from "./FruitFilters/FruitFilters";

const FruitSection = () => {
  const { fruits, filters } = useAppContext();

  const filteredFruits = filterFruits(fruits, filters);

  return (
    <div className={styles.fruitSection}>
      <h2 className={styles.title}>
        Items ({filteredFruits.length}){" "}
        {filters.favorite && (
          <span className={styles.favoritesTitle}>
            <span className={styles.emDash}>—</span> Favorites
          </span>
        )}
      </h2>

      <FruitFilters />

      <div className={styles.fruitGrid}>
        {filteredFruits.map((fruit) => (
          <FruitItem key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
};

export default FruitSection;
