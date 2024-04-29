import styles from "./urgent.module.css";

export default function UrgentParcel() {
  return (
    <div className={styles.urgent}>
      <input type="checkbox" id="urgent" />
      <label htmlFor="urgent">Urgent Parcel</label>
    </div>
  );
}
