/**
 *
 * Created by devin on 2/27/16.
 */
import React from 'react';
import mobx, {observable} from 'mobx';
import {observer} from 'mobx-react'
import {RaisedButton} from 'material-ui';
import {Baby, BabyCollection} from '../stores/baby.js';
import BabyMaker from './BabyMaker';
import PrognosticFactorForm from './PrognosticFactorForm';
const babycollection = new BabyCollection();
@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBabyUUID: null
    }
    this._handleBabySelect = this._handleBabySelect.bind(this)
  }

  _handleBabySelect(baby) {
    babycollection.selectedBaby = baby.uuid
    this.setState({
      selectedBabyUUID: baby.uuid
    })
  }
  render() {

    let Babies = <div> No Babies</div>

    if (babycollection.babies.length > 0) {
      Babies = babycollection.babies.map((baby) => (
        <div
          key = {baby.uuid}
          onClick={() => this._handleBabySelect(baby)}
      > {`${baby.name} - num wt records: ${baby.weightRecords.length}`} </div>)
    )}
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
            Selected Baby UUID: {this.state.selectedBabyUUID}
               {/**JSON.stringify(babycollection, null, 4)**/}
              {Babies}
            </div>
            <BabyMaker babyCollection={babycollection}></BabyMaker>
            {this.state.selectedBabyUUID
              ? <PrognosticFactorForm
              baby={babycollection.findBabyByUUID(this.state.selectedBabyUUID)}
              />
               : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
