import Articles from "../../components/articles";
import Aside from "../../components/aside";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Aside />
      <Articles />
    </div>
  );
}
