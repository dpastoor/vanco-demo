/**
 *
 * Created by devin on 2/27/16.
 */
import React from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react'
import {RaisedButton} from 'material-ui';
import PrognosticFactorForm from './PrognosticFactorForm';
@observer
class BabyDashboard extends React.Component {
  render() {
    console.log("baby dashboard")
    console.log(this.props)
    let babycollection = this.props.route.babycollection;
    let baby = babycollection.findBabyByUUID(this.props.params.babyID)
    console.log("rendering baby", JSON.stringify(toJS(baby)))
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
            Selected Baby UUID: {baby.uuid}
               {/**JSON.stringify(babycollection, null, 4)**/}
            </div>

              <div
              key = {baby.uuid}
              onClick={() => this._handleBabySelect(baby)}
              > {`${baby.name} - num wt records: ${baby.weightRecords.length}`}
              </div>
              <PrognosticFactorForm
                baby={baby}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default BabyDashboard
