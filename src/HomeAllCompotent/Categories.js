import React from 'react';
import { Col, Row } from 'reactstrap';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';


function Categories(props) {
    return (
        <div>
            <Row className='homeCategoriesMainSele'>
                <Col lg={8}>
                <Row className='homeCategoriesImageCon'>
                <Col lg={3} style={{height:"fit-content"}}>
                <Avatar size={40} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" /> 
                <p>Saloon For Women</p>
                </Col>
                <Col lg={3}  style={{height:"fit-content"}}>
                <Avatar size={40} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" /> 
                <p>Spa for Women</p>
                </Col>
                <Col lg={3}  style={{height:"fit-content"}}>
                <Avatar size={40} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" /> 
                <p>Salon for Men</p>
                </Col>
                <Col lg={3}  style={{height:"fit-content"}}>
                <Avatar size={40} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" /> 
                <p>Massage for Men</p>
                </Col>
                <Col lg={3}  style={{height:"fit-content"}}>
                <Avatar size={40} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" /> 
                <p>AC/Appliance Repair</p>
                </Col>
                <Col lg={3}  style={{height:"fit-content"}}>
                <Avatar size={40} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" /> 
                <p>Home Painting</p>
                </Col>
                <Col lg={3}  style={{height:"fit-content"}}>
                <Avatar size={40} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" /> 
                <p>Cleaning & Pest Control</p>
                </Col>
                <Col lg={3}  style={{height:"fit-content"}}>
                <Avatar size={40} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg" /> 
                <p>Electricians</p>
                </Col>
                </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Categories;