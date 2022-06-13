import React, { useContext } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles";
import './Login.css'
import { AuthContext } from '../../context/AuthContext';
import { login } from '../../API';
const Login = () => {
  const [userSignIn, setUserSignIn] = React.useState({});
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleChangeSignIn = (e) => {
    const value = e.target.value;
    setUserSignIn({ ...userSignIn, [e.target.name]: value });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userSignIn);
    login(userSignIn, dispatch);
  }
  const theme = createTheme({
    palette: {
      type: "dark"
    }
  });
  const paperStyle = { padding: 20, width: 280, margin: "10px auto 0px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '20px 0' }
  return (
    <div className="mainBody">
      <div className="mainBodyTop">
        <img src="https://projectheena.com/uploads/ngo/35139279458664/profileImage/images/toybank.jpeg" alt="Toybank" />
      </div>
      <ThemeProvider theme={theme}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatarStyle} size="large"><LockIcon /></Avatar>
              <h2>Sign In</h2>
            </Grid>
            <TextField label='Username' name="username" placeholder='Enter username' color="primary" fullWidth required style={{ marginBottom: 20 }} onChange={handleChangeSignIn} />
            <TextField label='Password' name="password" placeholder='Enter password' type='password' color="primary" fullWidth required style={{ marginBottom: 20 }} onChange={handleChangeSignIn} />
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleLogin}>Sign in</Button>
            {/* <Typography >
              <Link href="#" >
                Forgot password ?
              </Link>
            </Typography>
            <Typography > Do you have an account ?
              <Link href="#" >
                Sign Up
              </Link>
            </Typography> */}
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

export default Login