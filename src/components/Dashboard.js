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
import babyFixture from '../fixtures/babyStats'
// baby={babycollection.findBabyByUUID(this.state.selectedBabyUUID)}
@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this._handleBabySelect = this._handleBabySelect.bind(this)
  }

  _handleBabySelect(baby) {
    console.log('handling baby selection');
    console.log(baby);
    const path = `/babies/${baby.uuid}`;
    console.log(this.context)
    this.context.router.push(path)

  }
  render() {

    console.log(this.props.route)
    let babycollection = this.props.route.babycollection;
    let Babies = <div> No Babies</div>

    if (babycollection.babies.length > 0) {
      Babies = babycollection.babies.map((baby) => {
        return (
        <div
          key = {baby.uuid}
          onClick={() => this._handleBabySelect(baby)}
      > {`${baby.name} - num wt records: ${baby.weightRecords.length}`}
        </div>)
    })
  }
    console.log("dashboard!!")
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
               {/**JSON.stringify(babycollection, null, 4)**/}
              {Babies}
            </div>

             <BabyMaker babyCollection={babycollection}></BabyMaker>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.contextTypes = {
  router: function () {
    return React.PropTypes.func.isRequired;
  }
};
export default Dashboard
