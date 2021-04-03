import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { Button, FormGroup, FormControl, ControlLabel, Row, Col } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import './MainNav.css';
import logo from '../img/decoration.png'
import bag from  '../img/shopping-bag.png'
import userpng  from '../img/user.png'


function MainNav() {
  return (
    <>
        {/* Top bar */}
        <div className="top-header">
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="top_header_left">
                            <ul>
                                <li>store made with soko</li>
                            </ul>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
        <Navbar collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home"><div><span style={{float: "left"}}><img src={logo} alt="img" style="width: 30px" style={{width: "30px", padding: "right"}} /></span> 
                    <span className="logotitle" style={{float: "right"}}><span className="tag">Target</span> <br/> <small>Cham Towers, Plot 12 Nkruma Rd,  Kampla, Ug</small></span></div>
            </Navbar.Brand>
                <Nav className="mr-auto">
                
                </Nav>
                <Form inline>
                <div >
                    <div style={{float: "left"}}><span><img src={bag} /></span>Bag </div>
                    <div style={{float: "right", visibility: "hidden"}}><span><img src={bag} /></span>Bag </div>
                    <div id="movedUer" style={{float: "right"}}><span><img src={userpng} /></span>Account </div>
                </div>
                </Form>
            </Container>
        </Navbar>
    </>
  );
}

export default MainNav;
