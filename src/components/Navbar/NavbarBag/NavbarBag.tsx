import { useStoreContext } from "../../../Context";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import BagTooltip from "./BagTooltip/BagTooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./NavbarBag.module.css";
import BagIcon from "../../../icons/BagIcon";

const NavbarBag = () => {
  const { fruits, setFilters } = useStoreContext();
  const location = useLocation();

  const handleBagClick = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      favorite: false,
    }));
  };

  const isBagOpen = location.pathname === "/bag";
  const fruitsInBag = fruits.filter((fruit) => fruit.inBag);

  return (
    <div className={styles.navbarBag}>
      <Link to="/bag">
        <div data-tooltip-id="bag-tooltip" className={styles.bagContainer} onClick={handleBagClick}>
          <BagIcon className={styles.bag} isFilled={isBagOpen} />
          <div className={styles.number}>{fruitsInBag.length}</div>
        </div>
      </Link>

      {!isBagOpen && (
        <Tooltip
          id="bag-tooltip"
          className={styles.bagTooltip}
          clickable={true}
          place="bottom-end"
          opacity={1}
          border="1px solid var(--color-200)">
          <BagTooltip fruitsInBag={fruitsInBag} />
        </Tooltip>
      )}
    </div>
  );
};

export default NavbarBag;
