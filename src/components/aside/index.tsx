import Button from "../../ui/button";
import Categories from "../filters/categories";
import UrgentParcel from "../filters/urgent";
import Weight from "../filters/weight";
import styles from "./aside.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <h2>Filters</h2>
      <div className={styles.filters}>
        <Weight />
        <Categories />
        <UrgentParcel />
      </div>
      <Button to="/send">Send Parcel</Button>
    </aside>
  );
}
