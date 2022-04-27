import logo from './logo.svg';
import './App.css';
import { Row, Col, Navbar } from 'reactstrap';
import Home from './HomeAllCompotent/Home';
// import { useEffect } from 'react';
// import axios from 'axios';

// import { CarouselCompondent } from 'bootstrap';


function App() {

//   const getMapData = async()=>{
//     let receivedata = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/mapData",{
//       params :{
//         Latitude: 13.0482176,
//         Longitude: 80.2062336
//       }
//     })
//     console.log(await receivedata.data);
//   }

// useEffect(()=>{
//   getMapData();
// },[])
  

  return (
    <div className="App">
      <Row>
        <Home/>

       
        
      </Row>
    </div>
  )
}

export default App;
