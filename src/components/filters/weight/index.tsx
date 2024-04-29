import { ChangeEvent, useState } from "react";
import styles from "./weight.module.css";

const MAX_VALUE = 5000;
const MIN_VALUE = 100;

export default function Weight() {
  const [maxRangeValue, setMaxRangeValue] = useState<number>(MAX_VALUE);
  const [minRangeValue, setMinRangeValue] = useState<number>(MIN_VALUE);

  function maxRangeValueHandler(e: ChangeEvent<HTMLInputElement>) {
    setMaxRangeValue(+e.target.value);
  }

  function minRangeValueHandler(e: ChangeEvent<HTMLInputElement>) {
    setMinRangeValue(+e.target.value);
  }

  return (
    <div className={styles.weight}>
      <h4 className="sm-title">Weight</h4>
      <div>
        <p>
          <span>{`${minRangeValue}g`}</span>
          <span>{`${maxRangeValue}g`}</span>
        </p>
        <div className={styles["inputs-wrapper"]}>
          <input
            type="range"
            min={MIN_VALUE}
            max={MAX_VALUE}
            value={maxRangeValue}
            onChange={maxRangeValueHandler}
          />
          <input
            type="range"
            min={MIN_VALUE}
            max={MAX_VALUE}
            value={minRangeValue}
            onChange={minRangeValueHandler}
          />
        </div>
      </div>
    </div>
  );
}
