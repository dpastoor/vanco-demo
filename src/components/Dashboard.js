/**
 *
 * Created by devin on 2/27/16.
 */
import React from 'react';
import InputData from './input-data-form';
import { Paper } from 'material-ui';
import SimResults from './sim-results';
import mobx, {observable, autorun} from 'mobx';
import {observer} from 'mobx-react';
import {RaisedButton} from 'material-ui';
import Plotly from 'react-plotlyjs';

@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          width: '100%',
          margin: '10px auto 10px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <h2>Vancomycin Dosing </h2>
        </div>
        <div style={{
          flexGrow: 1,
          width: 'auto'
        }}>

          <div>
            <Paper
              style={{
        padding: 20
        }}
              zDepth={5}
            >
              hello
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}



export default Dashboard
