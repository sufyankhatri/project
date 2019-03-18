import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom'
//import Link from '@material-ui/core/Link';
import { signUser } from '../actions/AuthActions'
import { connect } from 'react-redux'
import NativeSelect from '@material-ui/core/NativeSelect';
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  error: {
    color: 'red'
  }
});

class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
    gpa: '',
    insti: "",
    Ferror: false,
    Lerror: false,
    Gerror: false,
    Perror: false,
    Cerror: false,
    Ierror:false,
    Serror: ''

  }
  onHandleChange = (event) => {

    this.setState({
      [event.target.id]: event.target.value
    })
  }
  onFirstNameChange = (event) => {

    if (event.target.value.length > 8) {
      this.setState({
        Ferror: true
      })
    }
    else {
      this.setState({
        Ferror: false
      })
      this.setState({
        [event.target.id]: event.target.value
      })
    }
  }
  onLastNameChange = (event) => {
    if (event.target.value.length > 8) {
      this.setState({
        Lerror: true
      })
    }
    else {
      this.setState({
        Lerror: false
      })
      this.setState({
        [event.target.id]: event.target.value
      })
    }
  }
  onPasswordChange = (event) => {
    if (event.target.value.length < 6) {
      this.setState({
        Perror: true

      })
    }
    else {
      this.setState({
        Perror: false,

      })
      this.setState({
        [event.target.id]: event.target.value
      })
    }
  }

  onConfirmPasswordChange = (event) => {

    if ((event.target.value) !== (this.state.password)) {
      this.setState({
        Cerror: true
      })
    }
    else {
      this.setState({
        Cerror: false
      })
      this.setState({
        [event.target.id]: event.target.value
      })
    }
  }


  onGpaChange = (event) => {
    if (event.target.value > 4) {
      this.setState({
        Gerror: true
      })

    }
    else {
      this.setState({
        Gerror: false
      })
      this.setState({
        [event.target.id]: event.target.value
      })
    }
  }
  onInstituteChange = (event) => {
    if(event.target.value===""){
      this.setState({
        Ierror:true
      })
    }
    else{
    this.setState({
      insti: event.target.value
    });
  }
  }



  showFirstNameError = () => {
    const { classes } = this.props
    if (this.state.Ferror) {

      return (
        <InputLabel className={classes.error}>First Name should be less than 8 characters</InputLabel>
      )
    }

  }
  showPasswordError = () => {
    const { classes } = this.props
    if (this.state.Perror) {
      return (
        <InputLabel className={classes.error}>Password must be 8 characters long</InputLabel>
      )
    }
  }

  showLastNameError = () => {
    const { classes } = this.props
    if (this.state.Lerror) {

      return (
        <InputLabel className={classes.error}>Last Name should be less than 6 characters</InputLabel>
      )
    }

  }
  showGpaError = () => {
    const { classes } = this.props
    if (this.state.Gerror) {
      return (
        <InputLabel className={classes.error}  >Gpa should be less than 4 </InputLabel>
      )
    }
  }
  showConfirmPasswordError() {
    const { classes } = this.props
    if (this.state.Cerror) {
      return (
        <InputLabel className={classes.error} >Passwords are not same</InputLabel>
      )
    }
  }
  showInstituteError() {
    const { classes } = this.props
    if (this.state.Ierror) {
      return (
        <InputLabel className={classes.error}>Please enter institute <br></br></InputLabel>
      )
    }
  }
  onSignUpPressed = () => {
    const { email, password, gpa, insti, firstName, lastName } = this.state
    const { classes } = this.props
    if (email === "" || password === "" || insti === "" || firstName === "" || lastName === "" || gpa === "") {

      this.setState({
        Serror: true
      })
    }
    else {
      this.setState({
        Serror:false
      })
      console.log(email, password, gpa, insti, firstName, lastName)
      this.props.signUser(email, password, gpa, insti, firstName, lastName)
    }
  }
  ShowSignUpError = () => {
    const { classes } = this.props
    if (this.state.Serror) {
      return (
        <InputLabel className={classes.error}>Please Fill the form correctly</InputLabel>
      )
    }

  }
  showFirebaseSignError = () => {
    const { classes } = this.props
    return (
      <InputLabel className={classes.error}>{this.props.error}</InputLabel>
    )
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
        </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <Input id="firstName" name="firstName" onChange={this.onFirstNameChange} error={this.state.Ferror} />
            </FormControl>
            {this.showFirstNameError()}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="last name">Last Name</InputLabel>
              <Input id="lastName" name="lastName" onChange={this.onLastNameChange} error={this.state.Lerror} />
            </FormControl>
            {this.showLastNameError()}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" onChange={this.onHandleChange} autoComplete="email" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" onChange={this.onPasswordChange} id="password" autoComplete="current-password" />
            </FormControl>
            {this.showPasswordError()}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <Input name="password" type="password" onChange={this.onConfirmPasswordChange} id="password" autoComplete="current-password" />
            </FormControl>
            {this.showConfirmPasswordError()}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="gpa">GPA</InputLabel>
              <Input id="gpa" name="gpa" type="number" onChange={this.onGpaChange} />
            </FormControl>
            {this.showGpaError()}
            <FormControl margin="normal" required fullWidth >
              <NativeSelect
                native
                 onChange={this.onInstituteChange}
                value={this.state.insti}
                name="institute"
                id="insti"
               // onClick={this.onInstituteChange}
              // input={<Input name="institute"/>}
              >
                <option value="">Select Institute</option>
                <option value="ned"> ned</option>
                <option value="ssuet">ssuet</option>
                <option value="maju">maju</option>
              </NativeSelect>
            </FormControl>
            {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
            {this.showInstituteError()}
            {this.ShowSignUpError()}
            {this.showFirebaseSignError()}
            <Button
              //  type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onSignUpPressed}
            >
              Submit
          </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  const { error } = state.auth
  return { error }
}
export default connect(mapStateToProps, { signUser })(withStyles(styles)(SignUp))
