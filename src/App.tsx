import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import FruitSection from "./components/FruitSection/FruitSection";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className={styles.contentContainer}>
        <Sidebar />
        <FruitSection />
      </div>
    </>
  );
};

export default App;
