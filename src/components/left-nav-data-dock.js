/**
 *
 * Created by devin on 2/29/16.
 */
import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

export default class LeftNavDataDock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <div>
        <RaisedButton
          label="Set Parameter Values"
          onTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <div style={{
            margin: 10
          }}>
            {this.props.children}
          </div>
        </LeftNav>
      </div>
    );
  }
}
