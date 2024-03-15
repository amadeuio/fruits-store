import styles from "./BagFruit.module.css";
import getImageSrc from "../../../utils/getImageSrc";
import DeleteIcon from "../../../icons/DeleteIcon";
import InStock from "../../common/InStock/InStock";
import EditQuantity from "../../common/EditQuantity/EditQuantity";
import { useAppContext } from "../../../Context";

const BagFruit = ({ fruit }) => {
  const { setFruits } = useAppContext();
  const { id, name, slug, family, price, quantity } = fruit;

  const handleDelete = () => {
    setFruits((prevFruits) => prevFruits.map((f) => (f.id === id ? { ...f, inBag: false } : f)));
  };

  return (
    <li className={styles.bagFruit}>
      <div className={styles.leftContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={getImageSrc(slug)} alt={name} />
        </div>

        <div className={styles.infoContainer}>
          <h3>{name}</h3>
          <h4>{family} Family</h4>
          <InStock />
          <div className={styles.qty}>Qty: {quantity}</div>
        </div>

        <EditQuantity fruit={fruit} />
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.delete} onClick={handleDelete}>
          <DeleteIcon className={styles.deleteIcon} />
        </div>

        <h5 className={styles.price}>${(price * quantity).toFixed(1)}</h5>
      </div>
    </li>
  );
};

export default BagFruit;
