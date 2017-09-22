import React, { Component } from 'react';
import {Row} from 'react-bootstrap';

import './Contact.css';

class Contact extends Component {
  render(){
    return(
      <div className="Contact">
        <Row id="page-header">
          Contact
          <hr/>
        </Row>
        <Row id="contacts">
          Email: ntg7@georgetown.edu
        </Row>
      </div>
    )
  }
}

export default Contact;
