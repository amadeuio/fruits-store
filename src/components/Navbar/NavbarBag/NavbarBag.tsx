import styles from "./NavbarBag.module.css";
import BagIcon from "../../../icons/BagIcon";

const NavbarBag = () => {
  return (
    <div className={styles.navbarBag}>
      <BagIcon className={styles.bagIcon} />
      <div className={styles.number}>2</div>
    </div>
  );
};

export default NavbarBag;
