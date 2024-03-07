import styles from "./Bag.module.css";
import { useAppContext } from "../../Context";

const Bag = () => {
  const { fruits } = useAppContext();

  const fruitsInBag = fruits.filter((fruit) => fruit.inBag);

  return (
    <div className={styles.bag}>
      <ul>
        {fruitsInBag.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bag;
