import styles from "./SidebarFamily.module.css";
import ExpandIcon from "../../../icons/ExpandIcon";
import { initialFamilies } from "../../../data/categories";
import { useState } from "react";
import prettyName from "../../../utils/prettyName";
import CheckIcon from "../../../icons/CheckIcon";

const SidebarFamily = () => {
  const [families, setFamilies] = useState(initialFamilies);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxClick = (index) => {
    const updatedFamilies = [...families];
    updatedFamilies[index].isChecked = !updatedFamilies[index].isChecked;
    setFamilies(updatedFamilies);
  };

  const checkedCount = families.filter((colorObj) => colorObj.isChecked).length;

  return (
    <div className={styles.SidebarFamily}>
      <div className={styles.title} onClick={toggleNavbar}>
        Family {checkedCount ? `(${checkedCount})` : ""}
        <ExpandIcon className={styles.expandIcon} isExpanded={isExpanded} />
      </div>
      <div className={`${styles.list} ${isExpanded ? styles.expanded : ""}`}>
        {families.map((family, index) => (
          <div
            key={family.name}
            className={styles.listItem}
            onClick={() => handleCheckboxClick(index)}>
            <span className={`${styles.checkbox} ${family.isChecked ? styles.checked : ""}`}>
              {family.isChecked && <CheckIcon className={styles.checkIcon} />}
            </span>
            <span className={styles.itemName}>{prettyName(family.name)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFamily;
