import { FC } from "react";
import styles from "./BagDropdown.module.css";
import { useAppContext } from "../../../../Context";

interface BagDropdownProps {
  isOpen: boolean;
}

const BagDropdown: FC<BagDropdownProps> = ({ isOpen }) => {
  const { fruits } = useAppContext();

  const fruitsInBag = fruits.filter((fruit) => fruit.inBag);

  return (
    <div className={`${styles.bagDropdown} ${isOpen ? styles.open : ""}`}>
      <ul>
        {fruitsInBag.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BagDropdown;
