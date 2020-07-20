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
              defaultValue={'John Smith'}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your AccountNumber"
              label="Loan Account Number"
              defaultValue={50000012345602}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
            <br />
            <AppBar title="Enter Loan Details" />
            <TextField
              placeholder="Current Debt"
              label="Current Loan"
              defaultValue={'119646.66 £'}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
            <br />
            <TextField
              placeholder="Mortgage Interest"
              label="Fixed Interest"
              defaultValue={4}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
            <br />
            <TextField
              placeholder="Term in Years"
              label="Term in Months"
              defaultValue={60}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
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
            >Confirm</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
