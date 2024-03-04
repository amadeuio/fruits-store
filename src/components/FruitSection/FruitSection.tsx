import styles from "./FruitSection.module.css";
import FruitItem from "./FruitItem/FruitItem";
import { useFruitsContext } from "../../Context";
import { Fruit } from "../../data/types";

const FruitSection = () => {
  const { fruits } = useFruitsContext();

  return (
    <div className={styles.fruitGrid}>
      {fruits.map((fruit: Fruit) => (
        <FruitItem key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
};

export default FruitSection;
