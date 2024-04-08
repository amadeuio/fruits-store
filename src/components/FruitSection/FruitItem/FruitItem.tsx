import { useStoreContext } from "../../../Context";
import { Link } from "react-router-dom";
import { Flipped } from "react-flip-toolkit";
import styles from "./FruitItem.module.css";
import getImageSrc from "../../../utils/getImageSrc";
import { Fruit } from "../../../data/types";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import BagIcon from "../../../icons/BagIcon";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem = ({ fruit }: FruitItemProps) => {
  const { setFruits } = useStoreContext();
  const { id, name, slug, price, family, isFavorite, inBag } = fruit;

  const handleFavoriteClick = (e) => {
    e.preventDefault();

    setFruits((prevFruits) =>
      prevFruits.map((f) => (f.id === id ? { ...f, isFavorite: !f.isFavorite } : f))
    );
  };

  const handleBagClick = (e) => {
    e.preventDefault();

    setFruits((prevFruits) => prevFruits.map((f) => (f.id === id ? { ...f, inBag: !f.inBag } : f)));
  };

  return (
    <Link to={slug}>
      <Flipped key={id} flipId={id}>
        <div className={styles.fruitItem}>
          <FavoriteIcon
            className={`${styles.favorite} ${isFavorite ? styles.clicked : ""}`}
            isFilled={isFavorite}
            onClick={(e) => handleFavoriteClick(e)}
          />

          <img className={styles.image} src={getImageSrc(slug)} alt={name} />

          <div className={styles.info}>
            <h3 className={styles.name}>{name}</h3>
            <h4 className={styles.family}>{family} Family</h4>
            <h5 className={styles.price}>${price.toFixed(1)}</h5>
          </div>
          <BagIcon className={styles.bag} isFilled={inBag} onClick={(e) => handleBagClick(e)} />
        </div>
      </Flipped>
    </Link>
  );
};

export default FruitItem;
