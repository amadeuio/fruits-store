import styles from "./SidebarVitamins.module.css";
import ExpandIcon from "../../../icons/ExpandIcon";
import { initialVitamins } from "../../../data/categories";
import { useState } from "react";
import CheckIcon from "../../../icons/CheckIcon";
import { VitaminObject } from "../../../data/types";
import { useFruitsContext } from "../../../Context";

const SidebarVitamins = () => {
  const [vitamins, setVitamins] = useState(initialVitamins);
  const [isExpanded, setIsExpanded] = useState(true);
  const { fruits, setFruits } = useFruitsContext();

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxClick = (index) => {
    const updatedVitamins = [...vitamins];
    updatedVitamins[index].isChecked = !updatedVitamins[index].isChecked;
    setVitamins(updatedVitamins);

    filterFruits(updatedVitamins);
  };

  const filterFruits = (vitamins: VitaminObject[]) => {
    const selectedVitamin = vitamins.filter((color) => color.isChecked).map((color) => color.name);

    const updatedFruits = fruits.map((fruit) => {
      const isDisplayed = selectedVitamin.every((color) => fruit.vitamins.includes(color));
      return {
        ...fruit,
        isDisplayed,
      };
    });

    setFruits(updatedFruits);
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
