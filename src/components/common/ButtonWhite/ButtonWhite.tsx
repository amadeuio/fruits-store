import { MouseEvent } from "react";
import styles from "./ButtonWhite.module.css";
import BagIcon from "../../../icons/BagIcon";

interface Props {
  className?: string;
  text?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonWhite = ({ className = null, text = "Add to Bag", onClick }: Props) => {
  return (
    <button className={`${styles.buttonWhite} ${className}`} onClick={onClick}>
      <BagIcon className={styles.bag} />
      {text}
    </button>
  );
};

export default ButtonWhite;
