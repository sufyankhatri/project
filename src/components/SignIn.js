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
import {loginUser, signUser} from '../actions/AuthActions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
//import Link from '@material-ui/core/Link';

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
});
class SignIn extends React.Component {
  state={
    email:"",
    password:""
  }

  onHandleChange=(event)=>{
    //console.log(event.target.value)
    //console.log(event.target.value)
    this.setState({
      [event.target.id]:event.target.value 
    })
    
    //console.log(value)
    //  this.props.emailChanged(value)
    }
   onPasswordChange=()=>{
   //   this.props.passwordChanged(text)
   
  }
   onLogInPressed=()=>{
     const{email,password}=this.state
     ///console.log(password)
    this.props.loginUser(email,password)
     // const {email, password}= this.props
   // this.props.loginUser(email,password)
  }
  
  render() {
    const { classes } = this.props;
    console.log(classes)
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input  id="email"  type="email" field="email" onChange={this.onHandleChange}  autoComplete="email" value={this.state.email} autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input  onChange={this.onHandleChange} name="password" type="password" field="password" id="password" value={this.state.password} autoComplete="current-password"  />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
          //    type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onLogInPressed}
            >
              Sign in
          </Button>
            <Button
              //   type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // component={Link}
              className={classes.submit}
            //   to="/SignUp"
            onClick={()=>{this.props.history.replace('/SignUp')}}
            >
              Sign Up
          </Button>
          
          </form>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state =>{
  const {email, password}=state.auth
  return {email,password}
}
export default connect(mapStateToProps,{loginUser, signUser})(withStyles(styles)(SignIn))
//export default withStyles(styles)(SignIn)