import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles";
import './Login.css'
const Login = () => {
  const theme = createTheme({
    palette: {
      type: "dark"
    }
  });
  const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
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
            <TextField label='Username' placeholder='Enter username' color="success" fullWidth required style={{ marginBottom: 20 }} />
            <TextField label='Password' placeholder='Enter password' type='password' color="warning" fullWidth required style={{ marginBottom: 20 }} />
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            <Typography >
              <Link href="#" >
                Forgot password ?
              </Link>
            </Typography>
            <Typography > Do you have an account ?
              <Link href="#" >
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

export default Login