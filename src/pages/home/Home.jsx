import React, { useState } from 'react'
import styles from './Home.module.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
export default function Home() {

  const[category,setCategory]=useState("All")

  return (
    <div>
      <Header/>   
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}
