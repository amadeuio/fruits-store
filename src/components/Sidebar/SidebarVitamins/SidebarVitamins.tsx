import styles from "./SidebarVitamins.module.css";
import ExpandIcon from "../../../icons/ExpandIcon";
import { vitaminList } from "../../../data/data";
import { useState } from "react";
import prettyName from "../../../utils/prettyName";
import CheckIcon from "../../../icons/CheckIcon";

const SidebarVitamins = () => {
  const [vitamins, setVitamins] = useState(vitaminList);
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
      <div className={`${styles.list} ${isExpanded && styles.expanded}`}>
        {vitamins.map((Vitamins, index) => (
          <div className={styles.listItem} onClick={() => handleCheckboxClick(index)}>
            <span className={`${styles.checkbox} ${Vitamins.isChecked && styles.checked}`}>
              {Vitamins.isChecked && <CheckIcon className={styles.checkIcon} />}
            </span>
            <span className={styles.itemName}>{prettyName(Vitamins.name)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarVitamins;
