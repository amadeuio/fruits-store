import styles from "./FreshPick.module.css";
import { Fruit } from "../../../data/types";
import getImageSrc from "../../../utils/getImageSrc";
import { Link } from "react-router-dom";

interface FreshPickProps {
  fruit: Fruit;
}

const FreshPick = ({ fruit }: FreshPickProps) => {
  const { name } = fruit;

  return (
    <Link to={`store/${name}`}>
      <div className={styles.freshPick}>
        <img className={styles.image} src={getImageSrc(name)} alt={name} />
        <div className={styles.info}>
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default FreshPick;
