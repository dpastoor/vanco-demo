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
import DosingRecommendation from '../stores/dosing_recommendations'
import fixtures from '../fixtures/mockData.js'
const dosingRecommendation = new DosingRecommendation({})

@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {setRec: true}
    this.showDetails = this.showDetails.bind(this)
  }
  showDetails() {
    console.log('showing details')
      this.setState({
        setRec: false
      })
  }
  render() {
    let View
    if (this.state.setRec) {
      View = <div>
        <Paper
        style={{
        padding: 20
        }}
        zDepth={5}
        >
          <InputData dr={dosingRecommendation}  />
        </Paper>
      <div>
        <SimResults dr={dosingRecommendation} showDetails={this.showDetails} />
      </div>
      </div>
  } else {
    View = <div style={{width: 800}}>
      <RaisedButton
        label="New Recommendation"
        onClick={() => this.setState({setRec: true})}
        style={{margin:10}}
        />
      <Plotly data={mobx.toJSON(dosingRecommendation.plotData.data)} layout={mobx.toJSON(dosingRecommendation.plotData.layout)} />
    </div>
  }
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

          {View}
        </div>
      </div>
    )
  }
}



export default Dashboard
