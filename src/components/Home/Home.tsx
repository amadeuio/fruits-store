import HomeCarousel from "./HomeCarousel/HomeCarousel";

import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to fruits.</h1>

      <p className={styles.description}>
        Discover our vibrant selection of fresh fruits, bursting with flavor, nutrition and
        vitality. Delivered straight from the farm to your table.
      </p>

      <Link to="/store">
        <button className={styles.storeButton}>Shop Now</button>
      </Link>

      <HomeCarousel />
    </div>
  );
};

export default Home;
