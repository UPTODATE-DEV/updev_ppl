import Aside from "../../components/aside";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Aside />
      <div style={{ backgroundColor: "whitesmoke" }}>Main Part</div>
    </div>
  );
}
