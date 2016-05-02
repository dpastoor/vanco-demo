/**
 * Created by devin on 2/27/16.
 */
import React from 'react';
import { TextField, RaisedButton } from 'material-ui';
import _ from 'lodash';
const field_data = [
	{name: 'dob', description: "Date of Birth (eg. 11/20/2015)", type: "text"},
	{name: 'ht', description: "Height (cm)" , type: "number"},
	{name: 'wt', description: "Weight (kg)", type: "number"},
	{name: 'bsa', description: "Body Surface Area (m^2)", type: "number"},
	{name:  'src', description: "Serum Creatinine (g/dL)", type: "number"}
];
let fields =  _.map(field_data, (f) => f.name);
class InputData extends React.Component {
  render() {
    return (
      <form
        onSubmit={(e) => {
        // this pattern instead of
        //handleSubmit(this.props.addExpToxData)
        // needed to prevent default to not refresh
        e.preventDefault();
        // handleSubmit will manage passing data to addExpToxData
        // clear form values
				console.log("Submitted!!")
        }}
      >
        {
          _.map(field_data, (f) => {
            return (<div
            key={f.name}
            >
              <TextField type={f.type}
                         hintText={f.description}
                         floatingLabelText={f.description}
                         step="any" />
            </div>)
          })
        }

        <RaisedButton
          type="submit"
          primary={true}
        >
          Submit
        </RaisedButton>
      </form>
    )
  }
}

export default InputData
