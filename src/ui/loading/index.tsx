import styles from "./loading.module.css";

export default function Loading() {
  return (
    <ul className={styles.loading}>
      {Array.from({ length: 4 }, (_, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
}
