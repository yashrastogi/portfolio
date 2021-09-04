/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Switch,
  withStyles
} from '@material-ui/core';
import { alpha, createTheme, darken, lighten, ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

export default function Header(props) {
  const useMountEffect = (fun) => useEffect(fun, []);
  useMountEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) handleDarkModeChange();
  });

  const [state, setState] = useState({
    themeDialogOpen: false,
    currentColor: '#3498db',
    themeColor: '#3498db',
    darkMode: false
  });
  const darkBgColor = 'rgb(32, 32, 32)';

  let theme = createTheme({
    palette: {
      type: state.darkMode ? 'dark' : 'light',
      background: {
        paper: state.darkMode ? darkBgColor : '#FFF'
      }
    }
  });
  const handleThemeDialogClose = () => setState({ ...state, themeDialogOpen: false });
  const handleThemeDialogOpen = () => setState({ ...state, themeDialogOpen: true });
  const handleDarkModeChange = () => {
    document.body.className = !state.darkMode ? 'theme-dark' : 'theme-light';
    setState({ ...state, darkMode: !state.darkMode });
  };
  const handleColorChange = async (e) => setState({ ...state, currentColor: e.target.value });
  const submitColorChange = (e) => {
    setState({ ...state, themeColor: state.currentColor });
    document.body.style.setProperty('--base-color', e.target.value);
    document.body.style.setProperty('--base-color-hover', darken(e.target.value, 0.1));
    document.body.style.setProperty('--darken-base-color-15', darken(e.target.value, 0.15));
    document.body.style.setProperty('--darken-base-color-25', darken(e.target.value, 0.25));
    document.body.style.setProperty('--lighten-base-color-25', lighten(e.target.value, 0.25));
    document.body.style.setProperty('--rgba-base-color-0', alpha(e.target.value, 0));
    document.body.style.setProperty('--rgba-base-color-hover-0-8', alpha(darken(e.target.value, 0.1), 0.8));
  }

  const StyledSwitch = withStyles({
    switchBase: {
      color: state.themeColor,
      '&$checked': {
        color: state.themeColor
      },
      '&$checked + $track': {
        backgroundColor: state.themeColor
      }
    },
    checked: {},
    track: {},
    root: {
      marginLeft: 15
    }
  })(Switch);

  const StyledButton = withStyles({
    root: { color: state.themeColor }
  })(Button);

  const ThemePickerDialog = (
    <Dialog
      disableScrollLock
      open={state['themeDialogOpen']}
      onClose={handleThemeDialogClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Theme Picker</DialogTitle>
      <DialogContent className="dialog">
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
                defaultValue={state.themeColor}
                style={{
                  width: '32px',
                  height: '32px',
                  border: 'none',
                  margin: 4,
                  backgroundColor: state.darkMode ? darkBgColor : '#fff'
                }}
                onChange={handleColorChange}
                onBlur={submitColorChange}
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
