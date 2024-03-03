import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1>Oooops 😬</h1>
      <div className={styles.errorBody}>
        <h2>404 - Page Not Found</h2>
        <Link to="/" className={styles.homeLink}>
          You can go back to the home by clicking here!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
