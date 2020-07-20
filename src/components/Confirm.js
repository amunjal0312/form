import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, accountnumber, mortgageholiday}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Account Number" secondary={accountnumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mortgage Value" secondary={25000} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mortgage Interest" secondary={4} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Term in Year" secondary={10} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mortgage Holiday" secondary={mortgageholiday} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Old Emi" secondary={1057} />
              </ListItem>
              <ListItem>
                <ListItemText primary="New Emi" secondary={1063} />
              </ListItem>
            </List>
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
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
