import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

import './PostPage.css';

class PostPage extends Component {
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
    fetch('/api/getPostByID/'+this.props.match.params.id)
      .then(res => res.json())
      .then(post => this.setState({
        id: post.post_id,
        category: post.post_category,
        date: post.post_date,
        title: post.post_title,
        text: post.post_text
      }));
  }




  render(){
    var dt = new Date(this.state.date);

    return(
      <Col xs={12} smOffset={1} sm={9} md={9} lg={9} id="PostPage">
        <Row>
          <Col xs={12} md={12} id="post-title">
            {this.state.title}
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} id="post-date-category">
            Author: Nick Getka | Category: <span id="post-cat">{this.state.category}</span> | Date: {dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear()}
          </Col>
        </Row>
        <Row>
          <Col xs={12} smOffset={1}sm={10} id="post-text">
            {this.state.text}
          </Col>
        </Row>
      </Col>
    )
  }
}

export default PostPage;
