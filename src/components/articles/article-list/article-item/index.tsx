import { MdLocationOn } from "react-icons/md";
import { BiSolidPlaneAlt } from "react-icons/bi";

import styles from "./article-item.module.css";
import { shortifyText } from "../../../../helpers/helperfn";
import { ArticleType } from "../../../../hooks/useGetParcels";

export default function ArticleItem({
  title,
  description,
  image,
}: ArticleType) {
  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.details}>
        <div className={styles.head}>
          <span className={styles.title}>{title}</span>
          <p>{shortifyText(description)}</p>
        </div>
        <div className={styles.location}>
          <span>
            <MdLocationOn /> Nairobi
          </span>{" "}
          to{" "}
          <span>
            <BiSolidPlaneAlt /> Kinshasa
          </span>
        </div>
        <div className={styles.info}>
          <span>600g</span>
          <span>1pc</span>
        </div>
        <div className={styles.controls}>
          <span>Waiting for shipping</span>
          <button>Carry parcel</button>
        </div>
      </div>
    </li>
  );
}
