import styles from "./Store.module.css";
import Sidebar from "../Sidebar/Sidebar";
import FruitSection from "../FruitSection/FruitSection";
import { slide as Burger } from "react-burger-menu";
import { useEffect, useState } from "react";
import BurgerIcon from "../../icons/BurgerIcon";
import "./burger.css";

const Store = () => {
  const [showBurger, setShowBurger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowBurger(window.innerWidth < 940);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.store}>
      {showBurger ? (
        <Burger customBurgerIcon={<BurgerIcon />}>
          <Sidebar />
        </Burger>
      ) : (
        <>
          <Sidebar />
        </>
      )}
      <FruitSection />
    </div>
  );
};

export default Store;
