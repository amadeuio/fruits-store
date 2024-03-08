import styles from "./FruitView.module.css";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";

const FruitView = () => {
  const navigate = useNavigate();
  const { fruits } = useAppContext();
  const { name } = useParams<{ name: string }>();

  const handleGoBack = () => {
    navigate(-1);
  };

  const fruit = fruits.find((fruit) => fruit.name === name);

  return (
    <div className={styles.fruitView}>
      <div>{fruit.name}</div>
      <button onClick={handleGoBack}>
        back
      </button>
    </div>
  );
};

export default FruitView;
