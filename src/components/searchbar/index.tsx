import { LuSearch } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";

import styles from "./searchbar.module.css";

export default function Searchbar() {
  return (
    <form className={styles.form}>
      <LuSearch />
      <input type="text" placeholder="Search Parcel..." />
      <VscSettings />
    </form>
  );
}
