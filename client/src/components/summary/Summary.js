import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from "react-bootstrap";

import './Summary.css'

class Summary extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: props.post.post_id,
      category: props.post.post_category,
      date: props.post.post_date,
      title: props.post.post_title,
      text: props.post.post_sum
    }

  }

  render() {
    var dt = new Date(this.state.date);
    var link = '/post/'+this.props.post.post_id;
    return (
      <div id="Summary">
        <Row>
          <Col xs={12} md={12}>
            <Link to={link} id="title">{this.state.title}</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} id="date-category">
            Author: Nick Getka | Category: <span id="cat">{this.state.category}</span> | Date: {dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear()}
          </Col>
        </Row>
        <Row>
          <Col sm={12}  xsHidden id="text">
            {this.state.text}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Summary;
