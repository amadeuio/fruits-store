import styles from "./FruitItem.module.css";
import { Fruit } from "../../../data/types";
import prettyName from "../../../utils/prettyName";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import { useFruitsContext } from "../../../Context";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem = ({ fruit }: FruitItemProps) => {
  const { fruits, setFruits } = useFruitsContext();
  const { id, name, family, favorite, price } = fruit;

  const handleFavoriteClick = () => {
    const updatedFruits = fruits.map((f) => {
      if (f.id === id) {
        return { ...f, favorite: !f.favorite };
      }
      return f;
    });

    setFruits(updatedFruits);
  };

  const baseUrl = "https://em-content.zobj.net/source/apple/354/";
  const imageUrl = `${baseUrl}${fruit.name}_${fruit.unicode}.png`;

  return (
    <div className={styles.fruitItem}>
      <FavoriteIcon
        className={`${styles.favorite} ${favorite ? styles.clicked : ""}`}
        isFilled={favorite}
        onClick={handleFavoriteClick}
      />
      <img className={styles.image} src={imageUrl} alt={prettyName(name)} />
      <div className={styles.info}>
        <h2 className={styles.title}>{prettyName(name)}</h2>
        <div className={styles.family}>{prettyName(family)} Family</div>
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  );
};

export default FruitItem;
