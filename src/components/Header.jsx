import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Switch,
  withStyles,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';

export default function Header(props) {
  const [state, setState] = useState({
    themeDialogOpen: false,
    themeColor: '#3498db',
    darkMode: false
  });

  const handleThemeDialogClose = () => setState({ ...state, themeDialogOpen: false });
  const handleThemeDialogOpen = () => setState({ ...state, themeDialogOpen: true });
  const handleDarkModeChange = () => setState({ ...state, darkMode: !state['darkMode'] });
  const handleColorChange = async (e) => {
    setState({ ...state, themeColor: e.target.value });
    window.less.modifyVars({ 'base-color': e.target.value });
  };

  const StyledSwitch = withStyles({
    switchBase: {
      color: state['themeColor'],
      '&$checked': {
        color: state['themeColor']
      },
      '&$checked + $track': {
        backgroundColor: state['themeColor']
      }
    },
    checked: {},
    track: {},
    root: {
      marginLeft: 15
    }
  })(Switch);

  const StyledButton = withStyles({
    root: { color: state['themeColor'] }
  })(Button);

  const ThemePickerDialog = (
    <Dialog
      disableScrollLock
      open={state['themeDialogOpen']}
      onClose={handleThemeDialogClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Theme Picker</DialogTitle>
      <DialogContent>
        <FormGroup row>
          <FormControlLabel
            control={
              <StyledSwitch
                checked={state['darkMode']}
                onChange={handleDarkModeChange}
                name="checkedB"
                aria-label="checkbox"
              />
            }
            label="Dark Mode"
          />
          <FormControlLabel
            control={
              <input
                type="color"
                value={state['themeColor']}
                style={{
                  width: '32px',
                  height: '32px',
                  border: 'none',
                  margin: 4,
                  backgroundColor: '#ffffff'
                }}
                onChange={handleColorChange}
              />
            }
            label="Theme Color"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <StyledButton onClick={handleThemeDialogClose}>Close</StyledButton>
      </DialogActions>
    </Dialog>
  );
  return (
    <React.Fragment>
      <div id="mobile-menu-open" className="shadow-large">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <header>
        <div id="mobile-menu-close">
          <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
          {props.sections.map((inst) => (
            <li key={inst}>
              <a href={'#' + inst.toLowerCase()}>{inst}</a>
            </li>
          ))}
          <li key="theme-config">
            <a onClick={handleThemeDialogOpen} href="#" className="no-scroll">
              <b>Theme</b>
            </a>
          </li>
        </ul>
      </header>
      {ThemePickerDialog}
    </React.Fragment>
  );
}
