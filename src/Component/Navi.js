

import {Nav, Navbar, NavDropdown,  Container } from "react-bootstrap";

import { BrowserRouter, Route, Routes, Link, } from "react-router-dom";

import React, { Component } from 'react'

import Game from './Game';
import MoreInfo from './MoreInfo';
import App from '../App'


export class Navi extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Game World</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
       <Nav.Link as={Link}to={"/"}>Home</Nav.Link>
      
      <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item as ={Link}to={"/Game"}>Memory Game</NavDropdown.Item>
        
         </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link}to={"/MoreInfo"}>More Info</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Routes>
                
            
             
          <Route>
           
           <Route path="Profile" element={<MoreInfo />} />
           <Route path="/" element={<App />} />
            <Route path="Landing" element={<Game />} />
             </Route>
              </Routes>
            </BrowserRouter>

      </div>
      
    )
  }
}

export default Navi