import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { assets } from "../../assests/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const[menu,setMenu]=useState("Home")

 
  return (
    <div className={styles.navbar}>
      <img src={assets.logo} alt="logo" className={styles.logo} />
      <ul className={styles.navbarMenu}>
        <li onClick={() => setMenu("Home")} className={menu==="Home"?styles.active:""}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu==="Menu"?styles.active:""}>Menu</li>
        <li onClick={() => setMenu("Mobile App")} className={menu==="Mobile App"?styles.active:""}>Mobile App</li>
        <li onClick={() => setMenu("Contact us")} className={menu==="Contact us"?styles.active:""}>Contact us</li>
      </ul>
      <div className={styles.navbarRight}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        <div className={styles.navbarSearchIcon}>
          <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
          <div className={styles.dot}></div>
        </div>
        <button>SignIn</button>
      </div>
    </div>
  );
}
