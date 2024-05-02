import { ReactNode } from "react";
import styles from "./display.module.css";

type Content = {
  children: ReactNode;
};

export default function DisplayContent({ children }: Content) {
  return <div className={styles.content}>{children}</div>;
}
