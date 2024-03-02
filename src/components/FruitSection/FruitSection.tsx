import styles from "./FruitSection.module.css";
import { fruits } from "../../data/data";
import { Fruit } from "../../data/types";
import prettyName from "../../utils/prettyName";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem = ({ fruit }: FruitItemProps) => {
  const baseUrl = "https://em-content.zobj.net/source/apple/354/";
  const imageUrl = `${baseUrl}${fruit.name}_${fruit.unicode}.png`;

  return (
    <div className={styles.fruitItem}>
      <img className={styles.fruitImg} src={imageUrl} alt={prettyName(fruit.name)} />
      <h2 className={styles.fruitTitle}>{prettyName(fruit.name)}</h2>
    </div>
  );
};

const FruitSection = () => {
  return (
    <div className={styles.fruitGrid}>
      {fruits.map((fruit) => (
        <FruitItem key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
};

export default FruitSection;
