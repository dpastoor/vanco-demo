/**
 * Created by devin on 3/3/16.
 */

import React from 'react';
const SweetAlert = require('react-swal');
import {observer} from 'mobx-react'
const DosingAlert = observer(function({dr, showDetails}) {
  if (dr.dosingRecommendation.length <= 0) {
    return <div>no rec</div>
  }
  let dosingRec = dr.dosingRecommendation[0]
  return (
    <div>
      <SweetAlert
        isOpen={dr.isOpen}
        title= {`Vancomycin Dose: ${dosingRec.amt} mg Q${dosingRec.ii}h`}
        showCancelButton={true}
        confirmButtonText="Show More Details"
        callback={(e) => {
          if (e) {
            showDetails()
          }
          dr.isOpen=false
        }}
        text={`
          <div>
              <p>
                     Estimated Patient Clearance: ${dosingRec.CLi} (L/hr)
              </p>
              <p>
                     Estimated Patient Volume of Distribution: ${dosingRec.Vi} (L)
              </p>
          </div>
        `}
        html={true}
         type="success"
      />
    </div>
  )
})


export default DosingAlert
