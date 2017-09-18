import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Styling
import './App.css';

//Static elements
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

//Pages
import Welcome from './welcome/Welcome';
import BlogListPage from './blogListPage/BlogListPage';
import PostPage from './postPage/PostPage';
import About from './about/About';
import Contact from './contact/Contact';
import NoMatch from './noMatch/NoMatch';

import {Grid, Row} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Router id="App">
          <Grid id="App">
            <Header />
            <Row className="main-content">
              <Sidebar />
              <Switch>
                <Route exact path='/'component={Welcome}/>
                <Route path='/about' component={About}/>
                <Route path='/hub' component={() => window.location = 'https://github.com/Nick-Getka'}/>
                <Route path="/blog" component={BlogListPage}/>
                <Route path='/post/:id' component={PostPage}/>
                <Route path='/contact' component={Welcome}/>
                <Route path="*" component={NoMatch}/>
              </Switch>
            </Row>
          </Grid>
      </Router>

    );
  }
}

export default App;
