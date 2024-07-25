import React, { useState } from 'react'
import styles from './FoodItem.module.css'
import { assets } from '../../assests/assets'

export default function FoodItem({id,name,price,description,image}) {
    const[itemCount,setItemCount]=useState(0);
  return (
    <div className={styles.foodItem}>
        <div className={styles.foodItemImgContainer}>
            <img className={styles.foodItemImage} src={image} alt=''/>
            {
                !itemCount ? <img className={styles.add} onClick={()=> setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt='' /> 
                :
                <div className={styles.foodItemCounter}>
                    <img onClick={()=>setItemCount(prev=>prev-1)}  src={assets.remove_icon_red} alt='' />
                    <p>{itemCount}</p>
                    <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt='' />
                </div>
            }
        </div>
        <div className={styles.foodItemInfo}>
            <div className={styles.foodItemNameRating}>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className={styles.foodItemDesc}>{description}</p>
            <p className={styles.foodItemPrice}>Rs.{price}</p>
        </div>
    </div>
  )
}
