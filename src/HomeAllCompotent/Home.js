import React from 'react';
import { Col } from 'reactstrap';
import NavBar1 from './NavBar1';
import './home.css'
import Categories from './Categories';

function Home(props) {
    return (
        <div className='homeMain'>
        <div className='navAndSearchBoxHolder'>
            <NavBar1/>
        </div>
        <Categories/>
        </div>
    );
}

export default Home;