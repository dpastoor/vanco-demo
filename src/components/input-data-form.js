/**
 * Created by devin on 2/27/16.
 */
 import React from 'react';
 import Formsy from 'formsy-react';
 import {MenuItem, RaisedButton, Paper } from 'material-ui';
 import FormsyText from '../fmi/FormsyText.jsx';
 import FormsyDate from '../fmi/FormsyDate.jsx';
 import FormsyTime from '../fmi/FormsyTime.jsx';
 import ThemeManager from 'material-ui/lib/styles/theme-manager';
 import MyRawTheme from '../css/materialThemeCustomizations';
 export default class InputData extends React.Component {
   constructor(props) {
     super(props);
		 this.state = {canSubmit: false}
		 this.styles = {
		      paperStyle: {
		        width: 300,
		        margin: 'auto',
		        padding: 20,
		      },
		      switchStyle: {
		        marginBottom: 16,
		      },
		      submitStyle: {
		        marginTop: 32,
		      },
		    }
				this.errorMessages= {
					numericError: "Please provide a number"
				}
			this.enableButton = this.enableButton.bind(this)
			this.disableButton = this.disableButton.bind(this)
			this.submitForm = this.submitForm.bind(this)
			this.notifyFormError = this.notifyFormError.bind(this)
 // want to add colors to context to make available to other components
   }

   static childContextTypes = {
     //just declares we will stick on child context, not actually setting it
     muiTheme: React.PropTypes.object
   };

   getChildContext() {
     return {
       muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
     };
   }



   enableButton() {
     this.setState({
       canSubmit: true,
     });
   }

   disableButton() {
     this.setState({
       canSubmit: false,
     });
   }

   submitForm(data) {
		 this.props.dr.dosingRecommendation = data
   }

   notifyFormError(data) {
     console.error('Form error:', data);
   }

   render() {
     let {paperStyle, switchStyle, submitStyle } = this.styles;
     let {  numericError } = this.errorMessages;

     return (
         <Paper style={paperStyle}>
           <Formsy.Form
             onValid={this.enableButton}
             onInvalid={this.disableButton}
             onValidSubmit={this.submitForm}
             onInvalidSubmit={this.notifyFormError}
           >
             <FormsyText
               name="pma"
               validations="isNumeric"
               validationError={numericError}
               hintText="age"
               floatingLabelText="Postmenstral Age (weeks)"
							 required
             />
						 <FormsyText
							 name="wt"
							 validations="isNumeric"
							 validationError={numericError}
							 hintText="wt"
							 floatingLabelText="Weight (kg)"
							 required
						 />
						 <FormsyText
							 name="scr"
							 validations="isNumeric"
							 validationError={numericError}
							 hintText="scr"
							 floatingLabelText="Serum Creatinine (mg/dL)"
							 required
						 />
             <RaisedButton
               style={submitStyle}
               type="submit"
               label="Submit"
               disabled={!this.state.canSubmit}
             />
           </Formsy.Form>
         </Paper>
     );
   }
 };

export default InputData
