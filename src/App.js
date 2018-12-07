import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Navbar from "./components/navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

//console.log(theme);
//console.log(blue)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar auth={this.props.auth} {...this.props} />
      </MuiThemeProvider>
    );
  }
}

export default App;
