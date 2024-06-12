import React from 'react'
import Header from './Components/Header'
import Category from './Components/Category'
import Banner from './Components/Banner'
import BestofElectronics from './Components/BestofElectronics'
import BestofToys from './Components/BestofToys'
import Sports from './Components/Sports'

function Home() {
  return (
    <div>
        <Header/>
        <Category/>
        <Banner/>
        <BestofElectronics/>
        <BestofToys/>
        <Sports/>
    </div>
  )
}

export default Home