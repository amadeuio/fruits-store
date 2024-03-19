import { useEffect, useState } from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import styles from "./Store.module.css";
import "./burgerMenu.css";
import Sidebar from "../Sidebar/Sidebar";
import FruitSection from "../FruitSection/FruitSection";
import BurgerIcon from "../../icons/BurgerIcon";
import CloseIcon from "../../icons/CloseIcon";

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
        <BurgerMenu
          customBurgerIcon={<BurgerIcon />}
          customCrossIcon={<CloseIcon />}
          width={"auto"}>
          <Sidebar />
        </BurgerMenu>
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
