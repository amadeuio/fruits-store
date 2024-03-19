import { Fruits } from "../data/types";

function showCheckoutMessage(fruitsInBag: Fruits): void {
  if (fruitsInBag.length > 0) {
    alert("Congratulations! You would have made a successful purchase if this was a real store 😁");
  } else {
    alert("Cannot proceed with checkout. Your bag is empty.");
  }
}

export default showCheckoutMessage;
