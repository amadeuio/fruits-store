import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import FreshPick from "./FreshPick/FreshPick";
import { useAppContext } from "../../Context";

const Home = () => {
  const { fruits } = useAppContext();

  const selectedFruits = ["Banana", "Mango", "Blueberries"];
  const freshPicks = fruits.filter((fruit) => selectedFruits.includes(fruit.name));

  return (
    <div className={styles.home}>
      <h1>Welcome to fruits.</h1>
      <p className={styles.mainParagraph}>
        Where Flavor Meets Health - We believe in the power of fruits to tantalize our taste buds,
        nourish our bodies, and empower us to live our best lives
      </p>
      <Link to="/store">
        <button className={styles.storeButton}>Go To Store</button>
      </Link>
      <div className={styles.freshPicks}>
        {freshPicks.map((fruit) => (
          <FreshPick key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
};

export default Home;
