import React from 'react'
import Banner from '../components/Banner'
import Sale from '../components/Sale'
import NewArrival from '../components/NewArrival'
import NewPhone from '../components/NewPhone'
import Footer from '../components/Footer'


const HomePages = () => {
  return (
    <div>
     <Banner/>
     <Sale/>
     <NewArrival/>
     <NewPhone/>
     <Footer/>
    </div>
  )
}

export default HomePages
