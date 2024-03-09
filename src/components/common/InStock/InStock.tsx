import styles from "./InStock.module.css";
import BoxIcon from "../../../icons/BoxIcon";

const InStock = () => {
  return (
    <div className={styles.inStock}>
      <BoxIcon className={styles.box} /> In Stock
    </div>
  );
};

export default InStock;
