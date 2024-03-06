import { useAppContext } from "../../Context";
import styles from "./FruitSection.module.css";
import filterFruits from "../../utils/filterFruits";

import FruitItem from "./FruitItem/FruitItem";

const FruitSection = () => {
  const { fruits, filters } = useAppContext();

  const filteredFruits = filterFruits(fruits, filters);

  return (
    <div className={styles.fruitGrid}>
      {filteredFruits.map((fruit) => (
        <FruitItem key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
};

export default FruitSection;
