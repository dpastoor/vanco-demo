/**
 * Created by devin on 3/3/16.
 */

import React from 'react';
const SweetAlert = require('react-swal');
import {observer} from 'mobx-react'
const DosingAlert = observer(function({dr}) {
  if (dr.dosingRecommendation.length <= 0) {
    return <div>no rec</div>
  }
  let dosingRec = dr.dosingRecommendation[0]
  console.log(JSON.stringify(dosingRec, null, 4))
  return (
    <div>
      <SweetAlert
        isOpen={true}
        title= {`Vancomycin Dose: ${dosingRec.amt} mg Q${dosingRec.ii}h`}
        showCancelButton={false}
        confirmButtonText="Show More Details"
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
