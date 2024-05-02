import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import styles from "./pagination.module.css";
import { MAX_DISPLAY_PARCELS } from "../../helpers/constants";
import { useSearchParams } from "react-router-dom";

interface Count {
  count: number;
}

export default function Pagination({ count }: Count) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / MAX_DISPLAY_PARCELS);

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", String(prev));
    setSearchParams(searchParams);
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", String(next));
    setSearchParams(searchParams);
  }

  if (count <= MAX_DISPLAY_PARCELS) return;

  return (
    <div className={styles.pagination}>
      <p>
        <span>{currentPage}</span>{" "}
        <span>of {Math.ceil(count / MAX_DISPLAY_PARCELS)} pages</span>
      </p>
      <div className={styles.controls}>
        <button onClick={previousPage} disabled={currentPage === 1}>
          <MdArrowBackIos />
        </button>
        <button onClick={nextPage} disabled={currentPage === pageCount}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
