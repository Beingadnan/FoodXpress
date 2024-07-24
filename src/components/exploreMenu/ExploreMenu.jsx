import React from 'react'
import styles from './ExploreMenu.module.css'
import { menu_list } from '../../assests/assets'

export default function ExploreMenu({category,setCategory}) {
  return (
    <div className={styles.exploreMenu} id='exploreMenu'>
    <h1>Explore Our Menu</h1>
    <p className={styles.exploreMenuText}>Chhose</p>
    <div className={styles.exploreMenuList}>
    {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className={styles.exploreMenuListItem}>
                <img className={category===item.menu_name?styles.active:""} src={item.menu_image} alt=''/>
                <p>{item.menu_name}</p>
            </div>
        )
    })}
    </div>
    <hr/>

    </div>
  )
}