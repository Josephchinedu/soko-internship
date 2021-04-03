
import { Button, FormGroup, FormControl, ControlLabel, Row, Col, Form} from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';

import './Body.css';
import './fontawesome.css';
import { FaAlignLeft, FaSearch, FaPlus} from "react-icons/fa";
import $ from 'jquery';
import img1 from '../img/lp-1.jpg';
import emo from '../img/emoj.PNG';
import buss from '../img/delivery-truck.png';
import shiel from '../img/shield.png';
import support from '../img/customer-service.png';
import sapp from '../img/sapp.PNG'


function Bodysite(){
    function handleClick(e) {
        const el = document.getElementsByClassName("ulproduct")
        $(el).slideToggle();
    }
  return (
    <>
        <div class="margin_top">
            <Container>
                <div style={{marginTop: "15px"}}>
                    <Row>
                        {/* product category */}
                        <Col lg={3} xs={12} md={6} sm={6}>
                            <div className="wrapper">
                                <div className="product_category">
                                    <div  class="product_header" onClick={handleClick} >
                                        <FaAlignLeft className="i" />
                                        <span>Categories</span>
                                    </div>
                                    <ul rel="toggle" className="ulproduct" >
                                        <li><a href="#">Electronic</a></li>
                                        <li><a href="#">Face Masks</a></li>
                                        <li><a href="#">Fresh Food</a></li>
                                        <li><a href="#">Grocery</a></li>
                                        <li><a href="#">Ocean Foods</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Kids</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        {/* end of product category */}


                        <Col lg={6} xs={12} md={6} sm={6}>
                            <div className="product_search">
                                <Form>
                                    <input type="text" placeholder="Iphone 17 pro max" />
                                    <Button><FaSearch /> </Button>
                                </Form>
                            </div>
                            <br />

                            {/* :::::::::::::::::::::::: Porduct Section ::::::::::::::::::::::::::::::: */}
                            <div className="main_product">
                                <div className="recent_product">
                                    <a href="#"  className="product_item">
                                        <div className="product_img">
                                            <img src={img1} alt="product_image" />
                                        </div>
                                        <div className="product_text">
                                            <h6>Product 1 items kk </h6>
                                            <span>$2.00</span>
                                        </div>
                                        <div className="check_button">
                                            <Button variant="outline-primary" size="sm"><FaPlus /> Add</Button>
                                        </div>
                                    </a>

                                    <a href="#"  className="product_item">
                                        <div className="product_img">
                                            <img src={img1} alt="product_image" />
                                        </div>
                                        <div className="product_text">
                                            <h6>Product 1 items kk </h6>
                                            <span>$2.00</span>
                                        </div>
                                        <div className="check_button">
                                            <Button variant="outline-primary" size="sm"><FaPlus /> Add</Button>
                                        </div>
                                    </a>

                                    <a href="#"  className="product_item">
                                        <div className="product_img">
                                            <img src={img1} alt="product_image" />
                                        </div>
                                        <div className="product_text">
                                            <h6>Product 1 items kk </h6>
                                            <span>$2.00</span>
                                        </div>
                                        <div className="check_button">
                                            <Button variant="outline-primary" size="sm"><FaPlus /> Add</Button>
                                        </div>
                                    </a>

                                    <a href="#"  className="product_item">
                                        <div className="product_img">
                                            <img src={img1} alt="product_image" />
                                        </div>
                                        <div className="product_text">
                                            <h6>Product 1 items kk </h6>
                                            <span>$2.00</span>
                                        </div>
                                        <div className="check_button">
                                            <Button variant="outline-primary" size="sm"><FaPlus /> Add</Button>
                                        </div>
                                    </a>

                                    <a href="#"  className="product_item">
                                        <div className="product_img">
                                            <img src={img1} alt="product_image" />
                                        </div>
                                        <div className="product_text">
                                            <h6>Product 1 items kk </h6>
                                            <span>$2.00</span>
                                        </div>
                                        <div className="check_button">
                                            <Button variant="outline-primary" size="sm"><FaPlus /> Add</Button>
                                        </div>
                                    </a>

                                    <a href="#"  className="product_item">
                                        <div className="product_img">
                                            <img src={img1} alt="product_image" />
                                        </div>
                                        <div className="product_text">
                                            <h6>Product 1 items kk </h6>
                                            <span>$2.00</span>
                                        </div>
                                        <div className="check_button">
                                            <Button variant="outline-primary" size="sm"><FaPlus /> Add</Button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} xs={12} md={6} sm={6}>
                           <span style={{color: "#1c1c1c", fontWeight: "bold"}}>Bag</span> <Button size="sm">0</Button>
                           <br /><br />

                           <center><img src={emo} alt="" />
                           <br />
                           <span style={{color: "#1c1c1c", fontWeight: "bold"}}>It's empty here</span>
                           <br />
                           <span>start shopping to add items to your bag</span>
                           </center>
                        </Col>
                    </Row>
                    <br /><br /><br />

                   
                </div>
            </Container>
        </div>

       <div class="features">
           <Container>
               <Row>
                   <Col  lg={3} xs={12} md={6} sm={6}></Col>
                   <Col  lg={3} xs={12} md={6} sm={6}>
                       <div className="featu">
                           <Row></Row>
                            <div>
                                <img src={buss} alt="" />
                                <p style={{color: "white"}}> Delivery</p>
                            </div>
                            <div>
                                <img src={shiel} alt="" />
                                <p style={{color: "white"}}> Protection</p>
                            </div>
                            <div>
                                <img src={support} alt="" />
                                <p style={{color: "white"}}> Support</p>
                            </div>
                       </div>
                   </Col>
                   <Col  lg={3} xs={12} md={6} sm={6}></Col>
               </Row>
           </Container>
       </div>

       {/* :::::::::::::::::::::: footer ::::::::::::::::::::: */}

       <br /><br /><br />
       <div>
       <Container>
               <Row>
                   <Col  lg={4} xs={12} md={6} sm={6}></Col>
                   <Col  lg={4} xs={12} md={6} sm={6}>
                       <center><span>STORE DETAILS</span><br />
                            <span style={{color: "#1c1c1c", fontWeight: "bold"}}>Target</span><br />
                            <span>Cham Towers, Plot 12 Nkruma Rd,  Kampla, Ug</span><br />
                            <img src={sapp} />
                       </center>
                   </Col>
                   <Col  lg={4} xs={12} md={6} sm={6}></Col>
               </Row>
           </Container>
       </div>
       <br /><br /><br />
    </>
  );
}

export default Bodysite;
