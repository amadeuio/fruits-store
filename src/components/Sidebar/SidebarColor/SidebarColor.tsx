import styles from "./SidebarColor.module.css";
import { useState } from "react";
import { colorList } from "../../../data/data";
import prettyName from "../../../utils/prettyName";
import CheckIcon from "../../../icons/CheckIcon";
import ExpandIcon from "../../../icons/ExpandIcon";

const SidebarColor = () => {
  const [colors, setColors] = useState(colorList);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxClick = (index) => {
    const updatedColors = [...colors];
    updatedColors[index].isChecked = !updatedColors[index].isChecked;
    setColors(updatedColors);
  };

  const checkedCount = colors.filter((colorObj) => colorObj.isChecked).length;

  return (
    <div className={styles.sidebarColor}>
      <div className={styles.title} onClick={toggleNavbar}>
        Color {checkedCount ? `(${checkedCount})` : ""}
        <ExpandIcon className={styles.expandIcon} isExpanded={isExpanded} />
      </div>

      <div className={`${styles.colorGrid} ${isExpanded && styles.expanded}`}>
        {colors.map((colorObj, index) => (
          <div
            key={index}
            className={`${styles.colorItem} ${colorObj.isChecked ? styles.clicked : ""}`}
            onClick={() => handleCheckboxClick(index)}>
            <div className={`${styles.checkbox} ${styles[colorObj.name]}`}>
              {colorObj.isChecked && <CheckIcon className={styles.checkIcon} />}
            </div>
            <span className={styles.text}>{prettyName(colorObj.name)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarColor;
