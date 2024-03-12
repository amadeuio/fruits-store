import styles from "./FruitView.module.css";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import getImageSrc from "../../../utils/getImageSrc";
import InStock from "../../common/InStock/InStock";
import Quantity from "../../common/Quantity/Quantity";
import ButtonBlue from "../../common/ButtonBlue/ButtonBlue";
import ButtonWhite from "../../common/ButtonWhite/ButtonWhite";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import FavoriteIcon from "../../../icons/FavoriteIcon";

const FruitView = () => {
  const navigate = useNavigate();
  const { fruits, setFruits } = useAppContext();
  const { name } = useParams<{ name: string }>();

  const fruit = fruits.find((fruit) => fruit.name === name);
  const { id, price, family, colors, vitamins, isFavorite, inBag } = fruit;

  const handleFavoriteClick = () => {
    const updatedFruits = fruits.map((f) => {
      if (f.id === id) {
        return { ...f, isFavorite: !f.isFavorite };
      }
      return f;
    });

    setFruits(updatedFruits);
  };

  const handleBagClick = () => {
    const updatedFruits = fruits.map((f) => {
      if (f.id === id) {
        return { ...f, inBag: !f.inBag };
      }
      return f;
    });

    setFruits(updatedFruits);
  };

  const handleGoBack = () => {
    navigate("/store");
  };

  const handleBuyNow = () => {
    const updatedFruits = fruits.map((f) => {
      if (f.id === id) {
        return { ...f, inBag: true };
      }
      return f;
    });

    setFruits(updatedFruits);

    navigate("/bag");
  };

  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Duis nec velit ut metus tincidunt auctor. Integer bibendum eros ut neque hendrerit, 
  a convallis elit congue. Sed id mauris vitae dolor vehicula faucibus. 
  Quisque convallis ligula ac felis laoreet, at ultricies velit vehicula. 
  Sed id tortor vel libero vestibulum tempor. Aliquam erat volutpat. 
  In hac habitasse platea dictumst.`;

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
          <img className={styles.image} src={getImageSrc(name)} alt={name} />
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
        <h2 className={styles.price}>${price.toFixed(1)}</h2>
        <Quantity />
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
