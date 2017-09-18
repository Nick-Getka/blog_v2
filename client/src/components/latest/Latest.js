import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';

import './Latest.css';


class Latest extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: -1,
      category: "",
      date: "",
      title: "",
      text: ""
    };
  }

  componentWillMount(){
    fetch('/api/getLatest')
      .then(res => res.json())
      .then(post => this.setState({
        id: post.post_id,
        category: post.post_category,
        date: post.post_date,
        title: post.post_title,
        text: post.post_sum
      }));
  }

  render(){
    var dt = new Date(this.state.date);
    var link = '/post/'+this.state.id;
    return(
      <div className="Latest">
        <Row id="page-header">
          Latest Article
          <hr/>
        </Row>
        <Row>
          <Col xs={12}>
            <Link to={link} id="subheader">{this.state.title}</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} id="latest-date-category">
            Author: Nick Getka | Category: <span id="latest-cat">{this.state.category}</span> | Date: {dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear()}
          </Col>
        </Row>
        <Row>
          <Col sm={12}  xsHidden id="latest-text">
            &emsp;{this.state.text}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Latest;
