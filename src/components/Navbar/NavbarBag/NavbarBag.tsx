import styles from "./NavbarBag.module.css";
import BagIcon from "../../../icons/BagIcon";
import NavbarBagDropdown from "./BagDropdown/BagDropdown";
import { useAppContext } from "../../../Context";
import { Link } from "react-router-dom";

import { useState } from "react";

const NavbarBag = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const { fruits } = useAppContext();

  const numberInBag = fruits.filter((fruit) => fruit.inBag).length;

  const handleBagClick = () => {
    setIsBagOpen(!isBagOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.navbarBag}>
      <Link to="bag">
        <div
          className={styles.bagContainer}
          onClick={handleBagClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <BagIcon className={styles.bagIcon} isFilled={isBagOpen} />
          <div className={styles.number}>{numberInBag}</div>
        </div>
      </Link>

      <NavbarBagDropdown isOpen={isDropdownOpen} />
    </div>
  );
};

export default NavbarBag;
