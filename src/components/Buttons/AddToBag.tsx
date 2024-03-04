import BagIcon from "../../icons/BagIcon";
import styles from "./AddToBag.module.css";

const AddToBag = (onClick) => {
  return (
    <button className={styles.addToBag} onClick={onClick}>
      <BagIcon className={styles.bagIcon} />
      Add to Bag
    </button>
  );
};

export default AddToBag;
