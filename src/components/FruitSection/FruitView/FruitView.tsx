import { useStoreContext } from "../../../Context";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./FruitView.module.css";
import getImageSrc from "../../../utils/getImageSrc";
import { fruitDescriptions } from "../../../data/fruitDescriptions";
import EditQuantity from "../../common/EditQuantity/EditQuantity";
import InStock from "../../common/InStock/InStock";
import ButtonBlue from "../../common/ButtonBlue/ButtonBlue";
import ButtonWhite from "../../common/ButtonWhite/ButtonWhite";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import FavoriteIcon from "../../../icons/FavoriteIcon";

const FruitView = () => {
  const navigate = useNavigate();
  const { fruits, setFruits } = useStoreContext();
  const { slug } = useParams<{ slug: string }>();

  const fruit = fruits.find((fruit) => fruit.slug === slug);
  const { id, name, price, quantity, family, colors, vitamins, isFavorite, inBag } = fruit;
  const description = fruitDescriptions[name];

  const handleFavoriteClick = () => {
    setFruits((prevFruits) =>
      prevFruits.map((f) => (f.id === id ? { ...f, isFavorite: !f.isFavorite } : f))
    );
  };

  const handleBagClick = () => {
    setFruits((prevFruits) => prevFruits.map((f) => (f.id === id ? { ...f, inBag: !f.inBag } : f)));
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleBuyNow = () => {
    setFruits((prevFruits) => prevFruits.map((f) => (f.id === id ? { ...f, inBag: true } : f)));

    navigate("/bag");
  };

  return (
    <div className={styles.fruitView}>
      <ButtonBack className={styles.buttonBack} onClick={handleGoBack} />

      <div className={styles.leftContainer}>
        <div className={styles.imageContainer}>
          <FavoriteIcon
            className={`${styles.favorite} ${isFavorite ? styles.clicked : ""}`}
            isFilled={isFavorite}
            onClick={() => handleFavoriteClick()}
          />
          <img className={styles.image} src={getImageSrc(slug)} alt={name} />
        </div>

        <div className={styles.categories}>
          {colors.map((color) => (
            <div key={color} className={`${styles.color} ${styles[color]}`}>
              {color}
            </div>
          ))}

          {vitamins.map((vitamin) => (
            <div key={vitamin} className={styles.vitamin}>
              {vitamin}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightContainer}>
        <h1>{name}</h1>
        <h4 className={styles.family}>{family} Family</h4>
        <InStock />
        <h5 className={styles.price}>${(price * quantity).toFixed(1)}</h5>
        <EditQuantity fruit={fruit} />
        <div className={styles.description}>{description}</div>
        <ButtonBlue text="Buy Now" className={styles.checkoutButton} onClick={handleBuyNow} />
        <ButtonWhite
          text={inBag ? "Remove from Bag" : "Add to Bag"}
          className={styles.bagButton}
          onClick={handleBagClick}
        />
      </div>
    </div>
  );
};

export default FruitView;
