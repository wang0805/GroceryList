import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// const styles = theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   margin: {
//     margin: theme.spacing.unit
//   },
//   withoutLabel: {
//     marginTop: theme.spacing.unit * 3
//   },
//   textField: {
//     flexBasis: 200
//   }
// });

class Login extends Component {
  render() {
    return <div>Test login</div>;
  }
}

export default withRouter(Login);

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.changeHandler = this.changeHandler.bind(this);
//   }

//   changeHandler(event) {
//     console.log("value", event.target.value);
//     this.props.setUser(event.target.value);
//   }

//   submitHandler(event) {
//       this.props.setUser(event.target.value)
//   }

//   render() {
//     const { user, pass, setUser, setPass } = this.props;
//     const { classes } = this.props;
//     // console.log("props of login:", this.props);
//     return (
//       <form>
//         <div className={classes.root}>
//           <FormControl
//             className={classNames(
//               classes.margin,
//               classes.withoutLabel,
//               classes.textField
//             )}
//             aria-describedby="username-helper-text"
//           >
//             <Input
//               id="adornment-username"
//               value={this.state.weight}
//               onChange={this.handleChange("weight")}
//               endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
//               inputProps={{
//                 "aria-label": "Weight"
//               }}
//             />
//             <FormHelperText id="weight-helper-text">Weight</FormHelperText>
//           </FormControl>
//           <FormControl
//             className={classNames(classes.margin, classes.textField)}
//           >
//             <InputLabel htmlFor="adornment-password">Password</InputLabel>
//             <Input
//               id="adornment-password"
//               type={this.state.showPassword ? "text" : "password"}
//               value={this.state.password}
//               onChange={this.handleChange("password")}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="Toggle password visibility"
//                     onClick={this.handleClickShowPassword}
//                   >
//                     {this.state.showPassword ? (
//                       <Visibility />
//                     ) : (
//                       <VisibilityOff />
//                     )}
//                   </IconButton>
//                 </InputAdornment>
//               }
//             />
//           </FormControl>
//         </div>
//       </form>
//     );
//   }
// }

// Login.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withRouter(withStyles(styles)(Login));
