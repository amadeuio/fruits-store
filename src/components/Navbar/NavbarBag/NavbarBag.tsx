import styles from "./NavbarBag.module.css";
import BagIcon from "../../../icons/BagIcon";
import { useAppContext } from "../../../Context";
import { Link } from "react-router-dom";

import { Tooltip } from "react-tooltip";
import BagTooltip from "./BagTooltip/BagTooltip";
import "react-tooltip/dist/react-tooltip.css";

import { useLocation } from "react-router-dom";

const NavbarBag = () => {
  const { fruits, setFilters } = useAppContext();
  const location = useLocation();

  const handleBagClick = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      favorite: false,
    }));
  };

  const isBagOpen = location.pathname === "/bag";

  const bagCount = fruits.filter((fruit) => fruit.inBag).length;

  return (
    <div className={styles.navbarBag}>
      <Link to="bag">
        <div data-tooltip-id="bag-tooltip" className={styles.bagContainer} onClick={handleBagClick}>
          <BagIcon className={styles.bagIcon} isFilled={isBagOpen} />
          <div className={styles.number}>{bagCount}</div>
        </div>
      </Link>
      <Tooltip
        id="bag-tooltip"
        className={styles.bagTooltip}
        clickable={true}
        place="bottom-end"
        opacity={1}
        border="1px solid var(--color-200)">
        <BagTooltip />
      </Tooltip>
    </div>
  );
};

export default NavbarBag;
