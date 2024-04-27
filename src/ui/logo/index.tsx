import { Link } from "react-router-dom";

import logo from "../../assets/p2p-parcel-logo.png";
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="p2p logo" />
    </Link>
  );
}
