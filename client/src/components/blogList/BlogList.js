import React, { Component } from 'react';
import ServerError from '../serverError/ServerError';
import Summary from '../summary/Summary';

class BlogList extends Component {
  constructor(props){
    super(props);

    this.state = {
      c: props.cat,
      posts: []
    };
  }

  componentDidMount(){
    if(this.state.c === "all" || this.state.c === undefined){
      fetch('/api/getAllPosts')
        .then(res => res.json())
        .then(posts => this.setState({posts}));
    }
    else{
      fetch("/api/getPosts/"+this.state.c)
      .then(res => res.json())
      .then(posts => this.setState({posts}));
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.c !== nextProps.cat && nextProps.cat !== undefined){
      this.setState({
        c:nextProps.cat,
        posts:[]
      });

      if(nextProps.cat === "all" || nextProps.cat === undefined){
        fetch('/api/getAllPosts')
          .then(res => res.json())
          .then(posts => this.setState({posts}));
      }
      else{
        fetch("/api/getPosts/"+nextProps.cat)
        .then(res => res.json())
        .then(posts => this.setState({posts}));
      }
    }
  }

  render(){
    return(
            <div id="BlogList">
              {this.state.posts.map(post=>
                <Summary post={post}/>
              )}
            </div>
        )
  }
}

export default BlogList;
