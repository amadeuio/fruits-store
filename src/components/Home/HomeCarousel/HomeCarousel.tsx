import { useStoreContext } from "../../../Context";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomeCarousel.module.css";
import getImageSrc from "../../../utils/getImageSrc";
import { Fruit } from "../../../data/types";

interface CarouselFruitProps {
  fruit: Fruit;
}

const CarouselFruit = ({ fruit }: CarouselFruitProps) => {
  const { name, slug } = fruit;

  return (
    <Link to={`/store/${slug}`}>
      <div className={styles.carouselFruit}>
        <img className={styles.image} src={getImageSrc(slug)} alt={name} />
        <div className={styles.info}>
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

const HomeCarousel = () => {
  const { fruits } = useStoreContext();

  const carouselFruitNames = ["Cherries", "Avocado", "Tangerine", "Melon", "Grapes"];
  const carouselFruits = carouselFruitNames.map((name) =>
    fruits.find((fruit) => fruit.name === name)
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.homeCarousel}>
      <Slider {...settings}>
        {carouselFruits.map((fruit) => (
          <div key={fruit.id} className={styles.carouselItem}>
            <CarouselFruit fruit={fruit} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
