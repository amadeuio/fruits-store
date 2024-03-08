import styles from "./BagTooltip.module.css";
import { useAppContext } from "../../../../Context";
import getImageSrc from "../../../../utils/getImageSrc";
import BagIcon from "../../../../icons/BagIcon";

const BagTooltip = () => {
  const { fruits } = useAppContext();

  const fruitsInBag = fruits.filter((fruit) => fruit.inBag);
  const subtotalPrice: string = fruitsInBag
    .reduce((total: number, fruit) => total + fruit.price, 0)
    .toFixed(2);
  const vatPrice: string = (parseFloat(subtotalPrice) * 0.2).toFixed(2);
  const totalPrice: string = (parseFloat(subtotalPrice) + parseFloat(vatPrice)).toFixed(2);

  return (
    <div className={styles.bagTooltip}>
      <h3 className={styles.title}>Shopping Bag</h3>
      <hr className={styles.horizontalLine} />
      <ul>
        {fruitsInBag.map((fruit) => (
          <li className={styles.fruit} key={fruit.id}>
            <img className={styles.image} src={getImageSrc(fruit.name)} alt={fruit.name} />
            <div className={styles.info}>
              <div className={styles.nameAndFamily}>
                <h4 className={styles.name}>{fruit.name}</h4>
                <div className={styles.family}>{fruit.family} Family</div>
              </div>
              <div className={styles.price}>${fruit.price}</div>
            </div>
          </li>
        ))}
      </ul>

      <hr className={styles.horizontalLine} />

      <div className={styles.subtotal}>
        <div className={styles.subtotalName}>Subtotal</div>
        <div className={styles.subtotalPrice}>${subtotalPrice}</div>
      </div>
      <div className={styles.vat}>
        <div className={styles.vatName}>VAT (20%)</div>
        <div className={styles.vatPrice}>${vatPrice}</div>
      </div>

      <hr className={styles.horizontalLine} />

      <div className={styles.total}>
        <div className={styles.totalName}>Total</div>
        <div className={styles.totalPrice}>${totalPrice}</div>
      </div>

      <button className={styles.checkout}>
        <BagIcon className={styles.bag} />
        Checkout
      </button>
    </div>
  );
};

export default BagTooltip;
