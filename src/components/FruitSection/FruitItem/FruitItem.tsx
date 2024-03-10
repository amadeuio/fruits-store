import styles from "./FruitItem.module.css";
import { Fruit } from "../../../data/types";
import { useAppContext } from "../../../Context";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import BagIcon from "../../../icons/BagIcon";
import getImageSrc from "../../../utils/getImageSrc";
import { Link } from "react-router-dom";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem = ({ fruit }: FruitItemProps) => {
  const { fruits, setFruits } = useAppContext();
  const { id, name, price, family, isFavorite, inBag } = fruit;

  const handleFavoriteClick = (e) => {
    e.preventDefault();

    const updatedFruits = fruits.map((f) => {
      if (f.id === id) {
        return { ...f, isFavorite: !f.isFavorite };
      }
      return f;
    });

    setFruits(updatedFruits);
  };

  const handleBagClick = (e) => {
    e.preventDefault();

    const updatedFruits = fruits.map((f) => {
      if (f.id === id) {
        return { ...f, inBag: !f.inBag };
      }
      return f;
    });

    setFruits(updatedFruits);
  };

  return (
    <Link to={name}>
      <div className={styles.fruitItem}>
        <FavoriteIcon
          className={`${styles.favorite} ${isFavorite ? styles.clicked : ""}`}
          isFilled={isFavorite}
          onClick={(e) => handleFavoriteClick(e)}
        />
        <img className={styles.image} src={getImageSrc(name)} alt={name} />

        <div className={styles.info}>
          <h3>{name}</h3>
          <h4 className={styles.family}>{family} Family</h4>
          <h3 className={styles.price}>${price.toFixed(1)}</h3>
        </div>
        <BagIcon className={styles.bag} isFilled={inBag} onClick={(e) => handleBagClick(e)} />
      </div>
    </Link>
  );
};

export default FruitItem;
