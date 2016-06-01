/**
 *
 * Created by devin on 2/27/16.
 */
import React from 'react';
import mobx, {observable} from 'mobx';
import {observer} from 'mobx-react'
import {RaisedButton} from 'material-ui';
import {Baby} from '../stores/baby.js'

const baby = new Baby("Dan", Date.UTC(2016, 1, 28, 10, 16), 2.5, 0.9, "Michel");
@observer
class Dashboard extends React.Component {
  render() {
    console.log("rerendering!!")
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
            <div
              style={{
        padding: 20
        }}
            >
              {JSON.stringify(baby.attendingDoctor)}
            </div>
            <button
              onClick={() => {
              console.log("adding concentration record")
              baby.addConcentrationRecord(Date.now(), 11.0)
          }}
            ></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
