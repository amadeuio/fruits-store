import styles from "./FruitSection.module.css";
import FruitItem from "./FruitItem/FruitItem";
import { useFruitsContext } from "../../Context";

const FruitSection = () => {
  const { fruits } = useFruitsContext();

  return (
    <div className={styles.fruitGrid}>
      {fruits.map((fruit) => fruit.isDisplayed && <FruitItem key={fruit.id} fruit={fruit} />)}
    </div>
  );
};

export default FruitSection;
