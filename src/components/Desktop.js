import React from 'react'
import NavBar from './desktop-comp/NavBar'
import "../App.css"
import HeaderScreen from './desktop-comp/HeaderScreen'
import Statistics from './desktop-comp/Statistics'
import WhyLebo from './desktop-comp/WhyLebo'
import Footer from './desktop-comp/Footer'

function Desktop() {
  return (
    <div>
        
        <NavBar/>
        <div>
        <HeaderScreen/>
        <Statistics/>
        <WhyLebo/>
        <Footer/>
        </div>

       
        
    </div>
  )
}

export default Desktop