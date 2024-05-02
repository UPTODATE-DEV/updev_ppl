import styles from "./article-list.module.css";
import ArticleItem from "./article-item";
import { useGetParcels } from "../../../hooks/useGetParcels";
import Pagination from "../../../ui/pagination";
import DisplayContent from "../../../ui/display";
import Loading from "../../../ui/loading";

export default function ArticleList() {
  const {
    data: { parcels, count },
    isLoading,
    error,
  } = useGetParcels();

  if (isLoading) return <Loading />;

  if (error)
    return (
      <DisplayContent>
        <p>Something went wrong :) Please try again later!</p>
      </DisplayContent>
    );

  if (!error && count === 0)
    return (
      <DisplayContent>
        <p>Sorry, No data available 🤷‍♂️</p>
      </DisplayContent>
    );

  return (
    <div className={styles.articles}>
      <ul className={styles["article-list"]}>
        {parcels.map((parcel) => (
          <ArticleItem key={parcel.id} {...parcel} />
        ))}
      </ul>
      <Pagination count={count} />
    </div>
  );
}
