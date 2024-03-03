import styles from "./Sidebar.module.css";
import SidebarColor from "./SidebarColor/SidebarColor";
import SidebarFamily from "./SidebarFamily/SidebarFamily";
import SidebarVitamins from "./SidebarVitamins/SidebarVitamins";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarColor />
      <SidebarFamily />
      <SidebarVitamins />
    </div>
  );
};

export default Sidebar;
