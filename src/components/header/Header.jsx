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
        <p>Craving something delicious? Browse our menu and have your favorite dishes delivered right to your door. Fast, easy, and tasty – just a click away!</p>
        <button>View Menu</button>
      </div>
    </div>

  );
}
