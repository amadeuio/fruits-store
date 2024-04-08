import { useStoreContext } from "../../Context";
import { Flipper } from "react-flip-toolkit";
import styles from "./FruitSection.module.css";
import filterFruits from "../../utils/filterFruits";
import FruitItem from "./FruitItem/FruitItem";
import ActiveFilters from "./ActiveFilters/ActiveFilters";

const FruitSection = () => {
  const { fruits, filters } = useStoreContext();
  const filteredFruits = filterFruits(fruits, filters);

  return (
    <div className={styles.fruitSection}>
      <h2 className={styles.title}>
        Items ({filteredFruits.length})
        {filters.favorite && (
          <span className={styles.favoritesTitle}>
            <span className={styles.emDash}>—</span>Favorites
          </span>
        )}
      </h2>

      <ActiveFilters />

      {filteredFruits.length === 0 ? (
        <p className={styles.noMatch}>No fruits match the current filters.</p>
      ) : (
        <Flipper
          flipKey={filteredFruits.map((item) => item.id).join("-")}
          spring={{
            stiffness: 700,
            damping: 70,
          }}>
          <div className={styles.fruitGrid}>
            {filteredFruits.map((fruit) => (
              <FruitItem key={fruit.id} fruit={fruit} />
            ))}
          </div>
        </Flipper>
      )}
    </div>
  );
};

export default FruitSection;
