import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Loan Details" />
            <TextField
              placeholder="Total Mortgage Value"
              label="Total Mortgage Value"
              onChange={handleChange('mortgageValue')}
              defaultValue={25000}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Mortgage Interest"
              label="Fixed Interest"
              onChange={handleChange('mortgageinterest')}
              defaultValue={4}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Term in Years"
              label="Term in Years"
              onChange={handleChange('terminyear')}
              defaultValue={10}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Holiday Period"
              label="Holiday Period"
              onChange={handleChange('mortgageholiday')}
              defaultValue={values.mortgageholiday}
              margin="normal"
              fullWidth
            />
            <br />
            
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
