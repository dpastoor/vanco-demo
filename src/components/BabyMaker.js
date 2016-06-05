import React from 'react';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {FormsyDate, FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';
import {observer} from 'mobx-react'
import {Baby} from '../stores/baby'
import {format, addMinutes} from 'date-fns'
@observer
export default class BabyMaker extends React.Component {

  /**
   * As an alternative to `MuiThemeProvider` you can add a theme directly into context.
   * See the [Material-UI themes](http://www.material-ui.com/#/customization/themes) docs for details.
   *
   * childContextTypes: {
   *   muiTheme: React.PropTypes.object,
   * },
   * getChildContext(){
   *   return {
   *     muiTheme: getMuiTheme(),
   *   }
   * },
   */
constructor(props) {
    super(props)
    this.state = {
      canSubmit: false
    };
    this.errorMessages = {
      wordsError: "Please only use letters",
        numericError: "Please provide a number",
        urlError: "Please provide a valid URL",
    }

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
      }
    }
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }



  enableButton() {
    this.setState({
      canSubmit: true
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false
    });
  }

  submitForm(data) {
    this.props.babyCollection.add(new Baby(
      data.name,
      // parse to a unix timestamp representing UTC time in milliseconds since 1970-01-01
      parseInt(format(`${format(data.birthDate, "YYYY-MM-DD")}T${format(data.birthTime, "HH:mm")}`, "x")),
      data.weight,
      data.serumCreatinine,
      data.attendingDoctor,
      data.treatmentInProgress
      )
    )

  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, numericError, urlError } = this.errorMessages;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={paperStyle}>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
            <FormsyText
              name="name"
              validations="isWords"
              validationError={wordsError}
              required
              hintText="What is the baby's name?"
              floatingLabelText="Name"
            />
            <FormsyDate
              name="birthDate"
              hintText="Birth Date"
              formatDate={(date) => {
                console.log(format(new Date(), "ZZ"))
                return format(date, "YYYY-MM-DD");
              }}
            />
            <FormsyTime
              name="birthTime"
              hintText="Birth Time"
              format='24hr'
              formatTime={(time) => {
                //TODO: noticed from console.log here that this formatTime is being
                // called any time a formsy form element is entered/exited
                return format(time, "HH:mm:ss");
              }}
            />
            <FormsyText
              name="weight"
              validations="isNumeric"
              validationError={numericError}
              hintText="Weight"
              floatingLabelText="Weight"
            />
            <FormsyText
              name="serumCreatinine"
              validations="isNumeric"
              validationError={numericError}
              hintText="Serum Creatinine"
              floatingLabelText="Serum Creatinine"
            />
            <FormsyText
              name="attendingDoctor"
              validations="isWords"
              validationError={wordsError}
              required
              hintText="Who is the attending Doctor?"
              floatingLabelText="attending doctor"
            />
            <FormsyToggle
              name="treatmentInProgress"
              label="treatment in progress"
              style={switchStyle}
            />
            <FormsyToggle
              name="Premature"
              label="Premature"
              style={switchStyle}
            />
            <RaisedButton
              style={submitStyle}
              type="submit"
              label="Submit"
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </MuiThemeProvider>
    );
  };
};
