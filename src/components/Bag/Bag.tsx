import styles from "./Bag.module.css";
import { useAppContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import BagIcon from "../../icons/BagIcon";
import BagFruit from "./BagFruit/BagFruit";

const Bag = () => {
  const navigate = useNavigate();
  const { fruits } = useAppContext();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCheckoutClick = () => {
    alert("This is not an actual store. 😁");
  };

  const fruitsInBag = fruits.filter((fruit) => fruit.inBag);
  const subtotalPrice: string = fruitsInBag
    .reduce((total: number, fruit) => total + fruit.price, 0)
    .toFixed(1);
  const vatPrice: string = (parseFloat(subtotalPrice) * 0.2).toFixed(1);
  const totalPrice: string = (parseFloat(subtotalPrice) + parseFloat(vatPrice)).toFixed(1);

  return (
    <div className={styles.bag}>
      <div className={styles.bagTop}>
        <button className={styles.backButton} onClick={handleGoBack}>
          back
        </button>
        <h2>Shopping Bag</h2>
      </div>

      <div className={styles.bagBottom}>
        <ul className={styles.fruitsContainer}>
          {fruitsInBag.map((fruit) => (
            <BagFruit key={fruit.id} fruit={fruit} />
          ))}
        </ul>

        <div className={styles.checkoutContainer}>
          <div className={styles.checkout}>
            <h2 className={styles.priceTitle}>${totalPrice}</h2>
            <div className={styles.subtotal}>
              <div className={styles.subtotalName}>Subtotal (3 items)</div>
              <div className={styles.subtotalPrice}>${subtotalPrice}</div>
            </div>
            <div className={styles.vat}>
              <div className={styles.vatName}>VAT (20%)</div>
              <div className={styles.vatPrice}>${vatPrice}</div>
            </div>
            <hr className={styles.horizontalLine} />
            <div className={styles.total}>
              <h2>Total</h2>
              <h2>${totalPrice}</h2>
            </div>
            <button className={styles.checkoutButton} onClick={() => handleCheckoutClick()}>
              <BagIcon className={styles.bagIcon} />
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
