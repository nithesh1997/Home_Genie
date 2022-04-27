import React from 'react';
import { Col } from 'reactstrap';
import NavBar1 from './NavBar1';
import './home.css'
import Categories from './Categories';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Carouselcomponent from './Carousel';
import Pictures from './Pictures';

function Home(props) {
    const [outputOfLatLong,setoutputOfLatLong] = useState("")

  // var x = document.getElementById("demo");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      setoutputOfLatLong("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setoutputOfLatLong(["Longetitude"+position.coords.latitude, " , "+ "Latetuide"+position.coords.longitude]);
  }

  // one Time it will run when page is start
  useEffect(()=>{
    getLocation();
  },[]);
    return (
        <div className='homeMain'>
        <div className='navAndSearchBoxHolder'>
            <NavBar1/>
        </div>
        <Categories/>
        <Carouselcomponent/>
        {outputOfLatLong}
        <Pictures/>
        <Footer/>
        </div>
        
    );
}

export default Home;