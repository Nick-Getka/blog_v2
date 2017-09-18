import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Latest from '../latest/Latest';
import About from '../about/About';
import Contact from '../contact/Contact';

import './Welcome.css';


class Welcome extends Component {


  render(){
    return(
      <Col xs={12} smOffset={1} sm={9} md={9} lg={9} id="Welcome">
        <Row>
          <Col xs={12} sm={7}>
            <Switch>
              <Route exact path='/'component={Latest}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
          </Col>
          <Col xsHidden sm={5}>
            <img src='./img/nlogo.png' id="nlogo" />
          </Col>
        </Row>
        <Row id="subheader">
          About This Site
          <hr/>
        </Row>
        <Row>
          <Col xs={12} id="bottom-text">
            <ul>
              <li>
                This blog site was built using ReactJS, ExpressJS, and PostgreSQL
              </li>
              <li>
                The frontend was made using ReactJS with the packages React, React-Router, and React-Bootstrap.  Styling is primarily achieved using CSS.  (Something) is used to minify the code for production.
              </li>
              <li>
                The backend is an RESTful API written to interact with the PostgreSQL database and was written in JavaScript and uses ExpressJS for routing and (Something) for authentication.
              </li>
              <li>
                The entire site is hosted on AWS.  The API server and the PostgreSQL database are deployed using Docker containers, which allows the to scale with user traffic.
              </li>
              <li>
                This site is a work in progress.  To see the code for the frontend and the backend, as well as to notify me of bugs or comment on the design, please visit the sites repo:<br/>https://github.com/Nick-Getka/blog_v2
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Welcome;
