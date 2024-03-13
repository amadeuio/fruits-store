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
        Discover a collection of nature's finest with our vibrant selection of farm-fresh fruits,
        bursting with flavor and vitality.
      </p>

      <Link to="/store">
        <button className={styles.storeButton}>Shop Now</button>
      </Link>

      <HomeCarousel />
    </div>
  );
};

export default Home;
