import styles from "./Store.module.css";
import Sidebar from "../Sidebar/Sidebar";
import FruitSection from "../FruitSection/FruitSection";

const Store = () => {
  return (
    <div className={styles.store}>
      <Sidebar />
      <FruitSection />
    </div>
  );
};

export default Store;
