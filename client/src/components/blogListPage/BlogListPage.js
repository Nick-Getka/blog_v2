import React, { Component } from 'react';
import {Col, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import BlogList from '../blogList/BlogList';
import './BlogListPage.css';

class BlogListPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      category:"all"
    }
  }

  changeCat(event){
    this.setState({
      category:event.target.value
    });
  }

  render(){
    return(
      <Col xs={12} smOffset={1} sm={9} md={9} lg={9}>
        <Row className="blogheader">
            Blog Archive
            <Col xsOffset={1} xs={10}>
              <hr/>
            </Col>
        </Row>
        <Row>
          <Col xsHidden>
            <ButtonToolbar bsClass="buttontoolbar">
              <ToggleButtonGroup bsClass="buttongroup" type="radio" name="options" defaultValue={"all"}>
                <ToggleButton id="togglebutton" onClick={this.changeCat.bind(this)} value={"all"}>
                  All
                </ToggleButton>
                <ToggleButton id="togglebutton" onClick={this.changeCat.bind(this)} value={"tech"}>
                  Tech
                </ToggleButton>
                <ToggleButton id="togglebutton" onClick={this.changeCat.bind(this)} value={"history"}>
                  History
                </ToggleButton>
                <ToggleButton id="togglebutton" onClick={this.changeCat.bind(this)} value={"music"}>
                  Music
                </ToggleButton>
                <ToggleButton id="togglebutton" onClick={this.changeCat.bind(this)} value={"writing"}>
                  Writing
                </ToggleButton>
                <ToggleButton id="togglebutton" onClick={this.changeCat.bind(this)} value={"misc"}>
                  Misc
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <BlogList cat={this.state.category}/>
        </Row>
      </Col>
    )
  }
}

export default BlogListPage;
