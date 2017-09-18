import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {SideNav} from 'react-sidenav';
import {Nav, NavItem} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import './Sidebar.css';

class Sidebar extends Component {
  render(){
    return(
      <Col sm={2} md={1} lg={1} xsHidden id="Sidebar">
        <SideNav id="SideNav">
          <Nav>
            <Row>
              <Col xs={12}>
                <Link to="/" id="nav-brand-img">
                  <img src="./img/headshot.png" className="headshot" alt='headshot'/>
                </Link>
              </Col>
            </Row>
            <Row>
              <Link to="/" id="nav-brand-text">Nick&#39;s Blog</Link>
            </Row>
          </Nav>
          <Nav>
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
        </SideNav>
      </Col>
    )
  }
}

export default Sidebar;
