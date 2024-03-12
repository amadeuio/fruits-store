import styles from "./BagTooltip.module.css";
import { useAppContext } from "../../../../Context";
import getImageSrc from "../../../../utils/getImageSrc";
import { Link } from "react-router-dom";
import ButtonWhite from "../../../common/ButtonWhite/ButtonWhite";
import ButtonBlue from "../../../common/ButtonBlue/ButtonBlue";

const BagTooltip = () => {
  const { fruits } = useAppContext();

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
    <div className={styles.bagTooltip}>
      <h2 className={styles.title}>Shopping Bag</h2>
      <hr className={styles.horizontalLine} />

      {fruitsInBag.length ? (
        <ul>
          {fruitsInBag.map((fruit) => (
            <li className={styles.fruit} key={fruit.id}>
              <div className={styles.leftContainer}>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={getImageSrc(fruit.name)} alt={fruit.name} />
                </div>
                <div className={styles.infoContainer}>
                  <h3 className={styles.name}>{fruit.name}</h3>
                  <h4>{fruit.family}</h4>
                  <div className={styles.qty}>Qty: 3</div>
                </div>
              </div>

              <h5>${fruit.price}</h5>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyBag}>Bag is empty.</p>
      )}

      <hr className={styles.horizontalLine} />

      <div className={styles.total}>
        <div className={styles.totalAndVat}>
          <h2>Total</h2>
          <span className={styles.inclVat}>(incl. VAT)</span>
        </div>
        <h2>${totalPrice}</h2>
      </div>

      <ButtonBlue
        className={styles.checkoutButton}
        text="Checkout"
        onClick={() => handleCheckoutClick()}
      />

      <Link to="/bag">
        <ButtonWhite text="See in Bag" />
      </Link>
    </div>
  );
};

export default BagTooltip;
