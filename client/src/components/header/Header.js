import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {Col} from 'react-bootstrap';

import './Header.css'

class Header extends Component {
  render(){
    return(
      <Col xs={12} smHidden mdHidden lgHidden id="Header">
        <Navbar fluid collapseOnSelect id="Header">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" id="nav-brand">Nick&#39;s Blog</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/" id="nav-link">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/about" id="nav-link">
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/hub" id="nav-link">
                <NavItem eventKey={3}>Github</NavItem>
              </LinkContainer>
              <LinkContainer to="/blog" id="nav-link">
                <NavItem eventKey={4}>Blog</NavItem>
              </LinkContainer>
              <LinkContainer to="/contact" id="nav-link">
                <NavItem eventKey={5}>Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    )
  }
}

export default Header;
