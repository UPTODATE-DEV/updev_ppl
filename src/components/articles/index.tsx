import ArticleList from "./article-list";
import styles from "./articles.module.css";

export default function Articles() {
  return (
    <section className={styles.articles}>
      <h2>Available Parcels</h2>
      <ArticleList />
    </section>
  );
}
