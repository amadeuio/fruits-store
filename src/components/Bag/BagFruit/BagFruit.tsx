import styles from "./BagFruit.module.css";
import getImageSrc from "../../../utils/getImageSrc";
import DeleteIcon from "../../../icons/DeleteIcon";
import InStock from "../../common/InStock/InStock";
import Quantity from "../../common/Quantity/Quantity";

const BagFruit = ({ fruit }) => {
  const { name, family, price } = fruit;

  return (
    <li className={styles.bagFruit}>
      <div className={styles.leftContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={getImageSrc(name)} alt={name} />
        </div>

        <div className={styles.infoContainer}>
          <h3>{name}</h3>
          <h4>{family} Family</h4>
          <InStock />
          <div className={styles.qty}>Qty: 3</div>
        </div>

        <Quantity />
      </div>

      <div className={styles.delete}>
        <DeleteIcon className={styles.deleteIcon} />
      </div>

      <h5 className={styles.price}>${price.toFixed(1)}</h5>
    </li>
  );
};

export default BagFruit;
