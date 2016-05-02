import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
require('./main.scss');
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './css/materialThemeCustomizations';
export default class App extends React.Component {
  constructor(props) {
    super(props);

// want to add colors to context to make available to other components
  }

  static childContextTypes = {
    //just declares we will stick on child context, not actually setting it
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
    };
  }

  render() {
    return(
      <div className="flex-container">
        {this.props.children}
      </div>
    )
  }
}
