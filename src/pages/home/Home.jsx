import React from 'react'
import Banner from '../../componenets/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonial from './Testimonial'
import OurServices from './OurServices'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonial/>
      <OurServices/>
    </div>
  )
}

export default Home