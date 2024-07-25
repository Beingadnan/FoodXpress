import React, { useState } from 'react'
import styles from './Home.module.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
export default function Home() {

  const[category,setCategory]=useState("All")

  return (
    <div>
      <Header/>   
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}
