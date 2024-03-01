import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Red</li>
        <li className={styles.menuItem}>Purple</li>
        <li className={styles.menuItem}>Green</li>
        <li className={styles.menuItem}>Yellow</li>
      </ul>
    </div>
  );
};

export default Sidebar;
