import React from 'react'
import Banner from '../../componenets/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
    </div>
  )
}

export default Home