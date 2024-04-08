import { useState } from "react";
import { useStoreContext } from "../../../Context";
import styles from "./SidebarVitamins.module.css";
import CheckIcon from "../../../icons/CheckIcon";
import ExpandIcon from "../../../icons/ExpandIcon";

const SidebarVitamins = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { filters, setFilters } = useStoreContext();
  const { vitamins } = filters;

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxClick = (index) => {
    const updatedVitamins = [...vitamins];
    updatedVitamins[index].isChecked = !updatedVitamins[index].isChecked;

    setFilters({ ...filters, vitamins: updatedVitamins });
  };

  const checkedCount = vitamins.filter((vitamin) => vitamin.isChecked).length;

  return (
    <div className={styles.sidebarVitamins}>
      <div className={styles.title} onClick={toggleNavbar}>
        <h2>Vitamins {checkedCount ? `(${checkedCount})` : ""}</h2>
        <ExpandIcon className={styles.expandIcon} isExpanded={isExpanded} />
      </div>
      <div className={`${styles.list} ${isExpanded ? styles.expanded : ""}`}>
        {vitamins.map((vitamin, index) => (
          <div
            key={vitamin.name}
            className={styles.listItem}
            onClick={() => handleCheckboxClick(index)}>
            <span className={`${styles.checkbox} ${vitamin.isChecked ? styles.checked : ""}`}>
              {vitamin.isChecked && <CheckIcon className={styles.checkIcon} />}
            </span>
            <span className={styles.itemName}>{vitamin.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarVitamins;
