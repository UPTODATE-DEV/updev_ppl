import { redableString } from "../../../helpers/helperfn";
import styles from "./categories.module.css";

export default function Categories() {
  return (
    <div className={styles.cat}>
      <h4 className="sm-title">Categories</h4>
      <ul>
        {categoriesList.map((cat) => (
          <Category key={cat.id} value={cat.title} />
        ))}
        <li></li>
      </ul>
    </div>
  );
}

interface CategoryType {
  value: string;
}

function Category({ value }: CategoryType) {
  return (
    <li>
      <input type="checkbox" id={value} value={value} />
      <label htmlFor={value}>{redableString(value)}</label>
    </li>
  );
}

const categoriesList = [
  { id: 1, title: "all" },
  { id: 2, title: "fashion" },
  { id: 3, title: "computing" },
  { id: 4, title: "baby-products" },
  { id: 5, title: "phones-&-pablettes" },
  { id: 6, title: "gamings" },
  { id: 7, title: "helth-&-beauty" },
  { id: 8, title: "appliances" },
  { id: 9, title: "tvs-&-audios" },
  { id: 10, title: "books" },
];
