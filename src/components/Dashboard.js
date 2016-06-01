/**
 *
 * Created by devin on 2/27/16.
 */
import React from 'react';
import mobx, {observable} from 'mobx';
import {observer} from 'mobx-react'
import {RaisedButton} from 'material-ui';
import {Baby, BabyCollection} from '../stores/baby.js'
import BabyMaker from './BabyMaker'
const baby = new Baby("Dan", Date.UTC(2016, 1, 28, 10, 16), 2.5, 0.9, "Michel");
const babycollection = new BabyCollection();
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
              {JSON.stringify(babycollection)}
            </div>
            <BabyMaker babyCollection={babycollection}></BabyMaker>
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
