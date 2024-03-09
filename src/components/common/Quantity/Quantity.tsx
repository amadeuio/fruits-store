import styles from "./Quantity.module.css";
import MinusIcon from "../../../icons/MinusIcon";
import PlusIcon from "../../../icons/PlusIcon";

const Quantity = () => {
  return (
    <div className={styles.quantity}>
      <span className={styles.modify}>
        <MinusIcon className={styles.modifyIcon} />
      </span>
      <span className={styles.number}>1</span>
      <span className={styles.modify}>
        <PlusIcon className={styles.modifyIcon} />
      </span>
    </div>
  );
};

export default Quantity;
