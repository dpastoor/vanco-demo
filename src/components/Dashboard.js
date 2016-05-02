/**
 *
 * Created by devin on 2/27/16.
 */
import React from 'react';
import InputData from './input-data-form';
import { Paper } from 'material-ui';
import SimResults from './sim-results';

class Dashboard extends React.Component {
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
          <Paper
          style={{
          padding: 20
          }}
          zDepth={5}
          >
            <InputData />
          </Paper>
        </div>
        <div>
          <SimResults />
        </div>
      </div>
    )
  }
}



export default Dashboard
