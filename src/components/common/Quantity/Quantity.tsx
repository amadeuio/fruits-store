import styles from "./Quantity.module.css";
import MinusIcon from "../../../icons/MinusIcon";
import PlusIcon from "../../../icons/PlusIcon";

const Quantity = () => {
  return (
    <div className={styles.quantity}>
      <div className={styles.modify}>
        <MinusIcon className={styles.modifyIcon} />
      </div>
      <div className={styles.number}>1</div>
      <div className={styles.modify}>
        <PlusIcon className={styles.modifyIcon} />
      </div>
    </div>
  );
};

export default Quantity;
