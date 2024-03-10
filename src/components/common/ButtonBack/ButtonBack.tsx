import { MouseEvent } from "react";
import styles from "./ButtonBack.module.css";
import BackIcon from "../../../icons/BackIcon";

interface Props {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonBack = ({ className = null, onClick }: Props) => {
  return (
    <button className={`${styles.buttonBack} ${className}`} onClick={onClick}>
      <BackIcon className={styles.backIcon} />
    </button>
  );
};

export default ButtonBack;
