import React from 'react'
import Navbar from './components/nav/Navbar'
import Header from './components/Header/Header'
import Memories from './components/memories/Memories'
import Trips from './components/Trips/Trips'
import Search from './components/Searches/Search'
import About from './components/About/About'
import Testimonial from './components/Testimonial/Testimonial'
import Destination from './components/destinations/Destination'
import Footer from './footer/Footer'

const App = () => {
  return (
    <>
    <div className='main'>
        <Navbar></Navbar>
        <Header></Header>
        <Memories></Memories>
       
   </div>
        <Trips></Trips>
        <Search></Search>
        <div className="main">
          <About></About>
        </div>
        <Testimonial></Testimonial>
        <Destination></Destination>
        <div className="main">
          <Footer></Footer>
        </div>
    </>
  )
}

export default App