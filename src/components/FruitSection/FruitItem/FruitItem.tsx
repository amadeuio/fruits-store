import styles from "./FruitItem.module.css";
import { Fruit } from "../../../data/types";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import { useFruitsContext } from "../../../Context";
import BagIcon from "../../../icons/BagIcon";
import getImageSrc from "../../../utils/getImageSrc";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem = ({ fruit }: FruitItemProps) => {
  const { fruits, setFruits } = useFruitsContext();
  const { id, name, family, favorite, price, inBag } = fruit;

  const handleFavoriteClick = () => {
    const updatedFruits = fruits.map((f) => {
      if (f.id === id) {
        return { ...f, favorite: !f.favorite };
      }
      return f;
    });

    setFruits(updatedFruits);
  };

  const handleBagClick = () => {
    const updatedFruits = fruits.map((f) => {
      if (f.id === id) {
        return { ...f, inBag: !f.inBag };
      }
      return f;
    });

    setFruits(updatedFruits);
  };

  return (
    <div className={styles.fruitItem}>
      <FavoriteIcon
        className={`${styles.favorite} ${favorite ? styles.clicked : ""}`}
        isFilled={favorite}
        onClick={handleFavoriteClick}
      />
      <img className={styles.image} src={getImageSrc(name)} alt={name} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.family}>{family} Family</div>
        <div className={styles.price}>${price}</div>
      </div>
      <BagIcon className={styles.bag} isFilled={inBag} onClick={handleBagClick} />
    </div>
  );
};

export default FruitItem;
