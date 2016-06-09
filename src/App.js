import React, { Component } from 'react';
import mobx, {observable} from 'mobx';
import {observer} from 'mobx-react'
import { Router, Route, Link } from 'react-router';
import {Baby, BabyCollection} from './stores/baby.js';
const babycollection2 = new BabyCollection();
babycollection2.add(babyFixture.babyOneWt);
import babyFixture from './fixtures/babyStats'
require('./main.scss');
@observer
class App extends React.Component {
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
export default App