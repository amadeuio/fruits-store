import styles from "./Bag.module.css";
import { useAppContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import BagFruit from "./BagFruit/BagFruit";
import ButtonBlue from "../common/ButtonBlue/ButtonBlue";
import ButtonBack from "../common/ButtonBack/ButtonBack";

const Bag = () => {
  const navigate = useNavigate();
  const { fruits } = useAppContext();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCheckoutClick = () => {
    if (fruitsInBag.length > 0) {
      alert(
        "Congratulations! You would have made a successful purchase if this was a real store 😁"
      );
    } else {
      alert("Cannot proceed with checkout. Your bag is empty.");
    }
  };

  const fruitsInBag = fruits.filter((fruit) => fruit.inBag);
  const subtotalPrice: string = fruitsInBag
    .reduce((total: number, fruit) => total + fruit.price * fruit.quantity, 0)
    .toFixed(1);
  const vatPrice: string = (parseFloat(subtotalPrice) * 0.2).toFixed(1);
  const totalPrice: string = (parseFloat(subtotalPrice) + parseFloat(vatPrice)).toFixed(1);

  return (
    <div className={styles.bag}>
      <ButtonBack className={styles.buttonBack} onClick={handleGoBack} />

      <div className={styles.bagTop}>
        <h2>Shopping Bag</h2>
      </div>

      <div className={styles.bagBottom}>
        <ul className={styles.fruitsContainer}>
          {fruitsInBag.length > 0 ? (
            fruitsInBag.map((fruit) => <BagFruit key={fruit.id} fruit={fruit} />)
          ) : (
            <li className={styles.emptyBag}>Bag is empty.</li>
          )}
        </ul>

        <div className={styles.checkoutContainer}>
          <div className={styles.checkout}>
            <h2>Order Summary</h2>
            <h2 className={styles.priceTitle}>${totalPrice}</h2>
            <div className={styles.subtotal}>
              <div className={styles.subtotalName}>Subtotal (3 items)</div>
              <div className={styles.subtotalPrice}>${subtotalPrice}</div>
            </div>
            <div className={styles.vat}>
              <div className={styles.vatName}>VAT (20%)</div>
              <div className={styles.vatPrice}>${vatPrice}</div>
            </div>
            <hr />
            <div className={styles.total}>
              <h2>Total</h2>
              <h2>${totalPrice}</h2>
            </div>
            <ButtonBlue className={styles.checkoutButton} onClick={() => handleCheckoutClick()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
