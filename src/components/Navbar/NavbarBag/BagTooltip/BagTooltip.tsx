import { useStoreContext } from "../../../../Context";
import { Link } from "react-router-dom";
import styles from "./BagTooltip.module.css";
import getImageSrc from "../../../../utils/getImageSrc";
import showCheckoutMessage from "../../../../utils/showCheckoutMessage";
import { Fruits } from "../../../../data/types";
import ButtonWhite from "../../../common/ButtonWhite/ButtonWhite";
import ButtonBlue from "../../../common/ButtonBlue/ButtonBlue";
import DeleteIcon from "../../../../icons/DeleteIcon";

interface BagTooltipProps {
  fruitsInBag: Fruits;
}

const BagTooltip = ({ fruitsInBag }: BagTooltipProps) => {
  const { setFruits } = useStoreContext();

  const handleCheckoutClick = () => {
    showCheckoutMessage(fruitsInBag);
  };

  const handleDelete = (id) => {
    setFruits((prevFruits) => prevFruits.map((f) => (f.id === id ? { ...f, inBag: false } : f)));
  };

  const subtotalPrice: string = fruitsInBag
    .reduce((total, fruit) => total + fruit.price * fruit.quantity, 0)
    .toFixed(1);
  const vatPrice: string = (parseFloat(subtotalPrice) * 0.2).toFixed(1);
  const totalPrice: string = (parseFloat(subtotalPrice) + parseFloat(vatPrice)).toFixed(1);

  return (
    <div className={styles.bagTooltip}>
      <h2 className={styles.title}>Shopping Bag</h2>

      <hr className={styles.horizontalLine} />

      <ul className={styles.fruitsList}>
        {fruitsInBag.length > 0 ? (
          fruitsInBag.map((fruit) => (
            <li className={styles.fruit} key={fruit.id}>
              <div className={styles.leftContainer}>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={getImageSrc(fruit.slug)} alt={fruit.name} />
                </div>
                <div className={styles.infoContainer}>
                  <h3 className={styles.name}>{fruit.name}</h3>
                  <h4>{fruit.family}</h4>
                  <div className={styles.qty}>Qty: {fruit.quantity}</div>
                </div>
              </div>
              <div className={styles.rightContainer}>
                <div className={styles.delete} onClick={() => handleDelete(fruit.id)}>
                  <DeleteIcon className={styles.deleteIcon} />
                </div>
                <h5 className={styles.price}>${(fruit.price * fruit.quantity).toFixed(1)}</h5>
              </div>
            </li>
          ))
        ) : (
          <li className={styles.emptyBag}>Bag is empty.</li>
        )}
      </ul>

      <hr className={styles.horizontalLine} />

      <div className={styles.total}>
        <div className={styles.totalAndVat}>
          <h2>Total</h2>
          <span className={styles.inclVat}>(incl. VAT)</span>
        </div>
        <h2>${totalPrice}</h2>
      </div>

      <div className={styles.buttonsContainer}>
        <ButtonBlue
          className={styles.checkoutButton}
          text="Checkout"
          onClick={() => handleCheckoutClick()}
        />
        <Link to="/bag">
          <ButtonWhite text="See in Bag" />
        </Link>
      </div>
    </div>
  );
};

export default BagTooltip;
