import styles from "./SidebarFamily.module.css";
import ExpandIcon from "../../../icons/ExpandIcon";
import { initialFamilies } from "../../../data/categories";
import { useState } from "react";
import CheckIcon from "../../../icons/CheckIcon";
import { useFruitsContext } from "../../../Context";
import { FamilyObject } from "../../../data/types";

const SidebarFamily = () => {
  const [families, setFamilies] = useState(initialFamilies);
  const [isExpanded, setIsExpanded] = useState(true);
  const { fruits, setFruits } = useFruitsContext();

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxClick = (index) => {
    const updatedFamilies = families.map((family, i) => ({
      ...family,
      isChecked: i === index ? !family.isChecked : false,
    }));

    setFamilies(updatedFamilies);

    filterFruits(updatedFamilies);
  };

  const filterFruits = (families: FamilyObject[]) => {
    const selectedFamily = families.filter((color) => color.isChecked).map((color) => color.name);

    const updatedFruits = fruits.map((fruit) => {
      const isDisplayed = selectedFamily.every((color) => fruit.family.includes(color));
      return {
        ...fruit,
        isDisplayed,
      };
    });

    setFruits(updatedFruits);
  };

  const checkedCount = families.filter((family) => family.isChecked).length;

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
            <span className={styles.itemName}>{family.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFamily;
