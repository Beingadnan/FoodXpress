import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div
      className={styles.header}
      style={{ backgroundImage: "url(/header1.jpg)" }}
    >
      <div className={styles.headerContent}>
        <h2>Order Your favourite Food here</h2>
        <p>ada asas asdasd asscasd asdas ava adad adad a d</p>
        <button>View Menu</button>
      </div>
    </div>
  );
}
