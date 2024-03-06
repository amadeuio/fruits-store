import styles from "./SidebarColor.module.css";
import { useState } from "react";
import { useFruitsContext } from "../../../Context";
import { initialColors } from "../../../data/categories";
import CheckIcon from "../../../icons/CheckIcon";
import ExpandIcon from "../../../icons/ExpandIcon";
import { ColorObject } from "../../../data/types";

const SidebarColor = () => {
  const [colors, setColors] = useState(initialColors);
  const [isExpanded, setIsExpanded] = useState(true);
  const { fruits, setFruits } = useFruitsContext();

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxClick = (index) => {
    const updatedColors = [...colors];
    updatedColors[index].isChecked = !updatedColors[index].isChecked;
    setColors(updatedColors);

    filterFruits(updatedColors);
  };

  const filterFruits = (colors: ColorObject[]) => {
    const selectedColors = colors.filter((color) => color.isChecked).map((color) => color.name);

    const updatedFruits = fruits.map((fruit) => {
      const isDisplayed = selectedColors.every((color) => fruit.colors.includes(color));
      return {
        ...fruit,
        isDisplayed,
      };
    });

    setFruits(updatedFruits);
  };

  const checkedCount = colors.filter((color) => color.isChecked).length;

  return (
    <div className={styles.sidebarColor}>
      <div className={styles.title} onClick={toggleNavbar}>
        Color {checkedCount ? `(${checkedCount})` : ""}
        <ExpandIcon className={styles.expandIcon} isExpanded={isExpanded} />
      </div>

      <div className={`${styles.grid} ${isExpanded && styles.expanded}`}>
        {colors.map((color, index) => (
          <div
            key={color.name}
            className={`${styles.gridItem} ${color.isChecked ? styles.clicked : ""}`}
            onClick={() => handleCheckboxClick(index)}>
            <div className={`${styles.checkbox} ${styles[color.name]}`}>
              {color.isChecked && <CheckIcon className={styles.checkIcon} />}
            </div>
            <span className={styles.itemName}>{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarColor;
