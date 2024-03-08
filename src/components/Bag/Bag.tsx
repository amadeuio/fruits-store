import styles from "./Bag.module.css";
import { useAppContext } from "../../Context";
import { useNavigate } from "react-router-dom";

const Bag = () => {
  const navigate = useNavigate();
  const { fruits } = useAppContext();

  const handleGoBack = () => {
    navigate(-1);
  };

  const fruitsInBag = fruits.filter((fruit) => fruit.inBag);

  return (
    <div className={styles.bag}>
      <ul>
        {fruitsInBag.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
      <button onClick={handleGoBack}>back</button>
    </div>
  );
};

export default Bag;
