import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your Name"
              label="Name"
              onChange={handleChange('name')}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your AccountNumber"
              label="Accountnumber"
              onChange={handleChange('accountnumber')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            />
            <br />
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
              placeholder="Holiday Period (Months)"
              label="Holiday Period"
              onChange={handleChange('mortgageholiday')}
              defaultValue={values.mortgageholiday}
              margin="normal"
              fullWidth
            />
            <br />

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

export default FormUserDetails;
