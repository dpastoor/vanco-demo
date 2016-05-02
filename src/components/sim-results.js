/**
 * Created by devin on 3/3/16.
 */

import React from 'react';
const SweetAlert = require('react-swal');
const DosingAlert = () => {
    return <div></div>
  return (
    <div>
      <SweetAlert
        isOpen={true}
        title= {`Fara-M Dose: ${inputData.dose_fara_m} mg`}
        showCancelButton={false}
        confirmButtonText="Get Another Recommendation"
        text={`
          <div>
              <p>
                     Dose based on 40 mg/m2: ${inputData.dose_40_mg_m2} mg
              </p>
              <p>
                     Difference between mg/kg and mg/m2 dosing: ${inputData.prec_dose_diff}%
              </p>
          </div>
        `}
        html={true}
         type="success"

      />
    </div>
  )
}


export default DosingAlert
