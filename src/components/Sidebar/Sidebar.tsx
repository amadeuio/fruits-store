import styles from "./Sidebar.module.css";
import { useState } from "react";
import { colorList } from "../../data/data";
import prettyName from "../../utils/prettyName";
import CheckIcon from "../../icons/CheckIcon";

const Sidebar = () => {
  const [colors, setColors] = useState(colorList);

  const handleCheckboxClick = (index) => {
    const updatedColors = [...colors];
    updatedColors[index].isChecked = !updatedColors[index].isChecked;
    setColors(updatedColors);
  };

  const checkedCount = colors.filter((colorObj) => colorObj.isChecked).length;

  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>Color ({checkedCount})</div>
      <div className={styles.colorsGrid}>
        {colors.map((colorObj, index) => (
          <div
            key={index}
            className={`${styles.colorItem} ${colorObj.isChecked ? styles.clicked : ""}`}
            onClick={() => handleCheckboxClick(index)}>
            <div className={`${styles.checkbox} ${styles[colorObj.color]}`}>
              {colorObj.isChecked && <CheckIcon className={styles.checkIcon} />}
            </div>
            <span className={styles.text}>{prettyName(colorObj.color)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
