import React, { useContext } from "react";
import styles from "./FoodDisplay.module.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className={styles.foodDisplay} id="foodDisplay">
      <h2>Top Dishes Near You</h2>
      <div className={styles.foodDisplayList}>
        {food_list.map((item, index) => {
          if(category==="All" || category===item.category){
            return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
          }
          
        })}
      </div>
    </div>
  );
}
