import styles from "./BagTooltip.module.css";
import { useAppContext } from "../../../../Context";
import getImageSrc from "../../../../utils/getImageSrc";
import BagIcon from "../../../../icons/BagIcon";
import InStock from "../../../common/InStock/InStock";
import { Link } from "react-router-dom";

const BagTooltip = () => {
  const { fruits } = useAppContext();

  const handleCheckoutClick = () => {
    alert("This is not an actual store. 😁");
  };

  const fruitsInBag = fruits.filter((fruit) => fruit.inBag);
  const subtotalPrice: string = fruitsInBag
    .reduce((total: number, fruit) => total + fruit.price, 0)
    .toFixed(2);
  const vatPrice: string = (parseFloat(subtotalPrice) * 0.2).toFixed(2);
  const totalPrice: string = (parseFloat(subtotalPrice) + parseFloat(vatPrice)).toFixed(2);

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
                  <InStock />
                  <div className={styles.qty}>Qty: 3</div>
                </div>
              </div>

              <h5>${fruit.price}</h5>
            </li>
          ))}
        </ul>
      ) : (
        <span className={styles.emptyBag}>Bag is empty.</span>
      )}

      <hr className={styles.horizontalLine} />

      <div className={styles.total}>
        <div className={styles.totalAndVat}>
          <h2>Total</h2>
          <span className={styles.inclVat}>(incl. VAT)</span>
        </div>
        <h2>${totalPrice}</h2>
      </div>

      <button className={styles.checkout} onClick={() => handleCheckoutClick()}>
        <BagIcon className={styles.bag} />
        Checkout
      </button>
      <Link to="/bag">
        <button className={styles.seeInBag}>See in Bag</button>
      </Link>
    </div>
  );
};

export default BagTooltip;
