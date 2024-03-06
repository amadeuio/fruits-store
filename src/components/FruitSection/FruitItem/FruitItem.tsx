import styles from "./FruitItem.module.css";
import { Fruit } from "../../../data/types";
import { useAppContext } from "../../../Context";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import BagIcon from "../../../icons/BagIcon";
import getImageSrc from "../../../utils/getImageSrc";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem = ({ fruit }: FruitItemProps) => {
  const { fruits, setFruits } = useAppContext();
  const { id, name, price, family, isFavorite, inBag } = fruit;

  const handleFavoriteClick = () => {
    const updatedFruits = fruits.map((f) => {
      if (f.id === id) {
        return { ...f, isFavorite: !f.isFavorite };
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
        className={`${styles.favorite} ${isFavorite ? styles.clicked : ""}`}
        isFilled={isFavorite}
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
