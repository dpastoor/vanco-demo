import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
require('./main.scss');
export default class App extends React.Component {
  constructor(props) {
    super(props);

// want to add colors to context to make available to other components
  }

  render() {
    return(
      <div className="flex-container">
        {this.props.children}
      </div>
    )
  }
}
