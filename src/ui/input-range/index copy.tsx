import { useEffect, useRef } from "react";
import styles from "./range.module.css";

export default function InputRange() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);
  const coords = useRef<{ startX: number; lastX: number }>({
    startX: 0,
    lastX: 0,
  });

  useEffect(function () {
    if (!containerRef.current || !leftBoxRef.current || !rightBoxRef.current)
      return;

    const container = containerRef.current;
    const left = leftBoxRef.current;
    const right = rightBoxRef.current;

    function onMouseDown(e: MouseEvent) {
      isClicked.current = true;

      coords.current.startX = e.clientX;
    }

    function onMouseUp() {
      isClicked.current = false;

      coords.current.lastX = left.offsetLeft;
    }

    function onMouseMove(e: MouseEvent) {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;

      left.style.left = `${nextX}px`;
    }

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseout", onMouseUp);
    left.addEventListener("mousedown", onMouseDown);
    left.addEventListener("mouseup", onMouseUp);

    function cleanup() {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseout", onMouseUp);
      left.removeEventListener("mousedown", onMouseDown);
      left.removeEventListener("mouseup", onMouseUp);
    }

    return cleanup;
  }, []);

  return (
    <div
      className={styles["fake-range"]}
      ref={containerRef}
      style={{ marginBlock: "2rem" }}
    >
      <div className={styles.left} ref={leftBoxRef}></div>
      <div className={styles.right} ref={rightBoxRef}></div>
    </div>
  );
}
