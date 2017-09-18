import React, { Component } from 'react';
import './ServerError.css';

class ServerError extends Component {
  render(){
    return(
      <div className="error-message">
        Error: Could not connect to proxy server! Please let me know!
      </div>
    )
  }
}

export default ServerError;
