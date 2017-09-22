import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

import './About.css';

class About extends Component {
  render(){
    return(
      <Col xs={12} smOffset={1} sm={9} md={9} lg={9} id="About">
        <Row id="page-header">
          About
          <hr/>
        </Row>
        <Row>
          <Col xs={12} sm={8} id="about-text">
              <strong>Name:</strong> Nick Getka<br/>
              <strong>Age:</strong> {(new Date()).getFullYear()-1995}<br/>
              <strong>Field of Interest:</strong> Software Development<br/>
              <strong>Employment:</strong> Recent Graduate from Georgetown University
          </Col>
          <Col xsHidden sm={4}>
            <img src='./img/headshot.png' id="hs" alt="headshot" />
          </Col>
        </Row>
        <Row id="subheader">
          Education
          <hr/>
        </Row>
        <Row>
          <Col xsHidden sm={4}>
            <img src='./img/gseal.png' id="hs" alt="gseal"/>
          </Col>
          <Col xs={12} sm={8} mdOffset={4} md={4} id="about-text">
              <strong>School:</strong> Georgetown University<br/>
              <strong>Primary Degree:</strong> B.A. in Computer Science<br/>
              <strong>Secondary Degree:</strong> B.A. in Economics<br/>
              <strong>Graduation Date:</strong> May 2017<br/>
          </Col>
        </Row>
        <Row id="subheader">
          Hobbies
          <hr/>
        </Row>
        <Row id="subsubheader">
          Tech
          <hr/>
        </Row>
        <Row>
          <Col xs={12} sm={8} id="about-text">
            &emsp;Every part of the Tech industry interests me from the new chips and cards being invented to the code written to use them to businesses that turn that code into useful consumer services.  Of particular interest to me is distributed, cloud-based systems.
          </Col>
          <Col xsHidden sm={4}>
            <img src='./img/tech.jpg' id="hs" alt="tech"/>
          </Col>
        </Row>
        <Row id="subsubheader">
          History
          <hr/>
        </Row>
        <Row>
          <Col xsHidden sm={4}>
            <img src='./img/history.jpg' id="hs" alt="history"/>
          </Col>
          <Col xs={12} sm={8} mdOffset={4} md={4} id="about-text">
            &emsp;I have always been interested in history, but a few years ago I became very interested in the past after listenning to Mike Duncan&#39;s the History of Rome for the first time.  Now, I am constantly listening to history podcasts and audiobooks, even picking up a physical book now and then.
          </Col>
        </Row>
        <Row id="subsubheader">
          Music
          <hr/>
        </Row>
        <Row>
          <Col xs={12} sm={8} id="about-text">
            &emsp;Music is something I learned to appreciate late, but starting college I became an avid listener and even sometimes performer of Blues Music after reading Delta Blues by Ted Gioia.  I have since become a fan of pretty much every style of music from Robert Johnson to Lou Reed to Kendrick Lamar.
          </Col>
          <Col xsHidden sm={4}>
            <img src='./img/music.jpg' id="hs" alt="music"/>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default About;
