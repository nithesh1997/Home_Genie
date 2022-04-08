import React from 'react';
import { Col, Row } from 'reactstrap';
import './Nav.css';

function NavBar1(props) {
    return (
        <div>
          <Row>
              <Col lg={7} style={{display: "flex"}}>
                <img className='imageClass' src='https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png'/>
              </Col>
              <Col>
              <Row>
                  <Col>
                  <p>Blog</p>
                  </Col>
                  <Col>
                  <p>Register As Professional</p>
                  </Col>
                  <Col>
                  <p>Login</p>
                  </Col>
              </Row>
              </Col>
          </Row>   
        </div>
    );
}

export default NavBar1;