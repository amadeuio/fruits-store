import styles from "./SidebarVitamins.module.css";
import ExpandIcon from "../../../icons/ExpandIcon";
import { initialVitamins } from "../../../data/categories";
import { useState } from "react";
import CheckIcon from "../../../icons/CheckIcon";

const SidebarVitamins = () => {
  const [vitamins, setVitamins] = useState(initialVitamins);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxClick = (index) => {
    const updatedVitamins = [...vitamins];
    updatedVitamins[index].isChecked = !updatedVitamins[index].isChecked;
    setVitamins(updatedVitamins);
  };

  const checkedCount = vitamins.filter((colorObj) => colorObj.isChecked).length;

  return (
    <div className={styles.SidebarVitamins}>
      <div className={styles.title} onClick={toggleNavbar}>
        Vitamins {checkedCount ? `(${checkedCount})` : ""}
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
