import React, { useContext } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext'

export default function LoginForm({ setOpenPopup, setClosePopup }) {
    const [userSignIn, setUserSignIn] = React.useState({});
    const { dispatch } = useContext(AuthContext);
    const handleChangeSignIn = (e) => {
        const value = e.target.value;
        setUserSignIn({ ...userSignIn, [e.target.name]: value });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        loginCall(userSignIn, dispatch);
    }
    return (
        <Grid>
            <Paper elevation={0} style={{ padding: 20, width: 280, margin: "10px auto" }}>
                <Grid align='center' style={{ marginBottom: '10px' }}>
                    <Avatar style={{ backgroundColor: '#1bbd7e' }} size="large"><LockIcon /></Avatar>
                </Grid>
                <TextField label='Username' placeholder='Enter username' name="username" fullWidth required style={{ marginBottom: 20 }} onChange={handleChangeSignIn} />
                <TextField label='Password' placeholder='Enter password' type='password' name="password" fullWidth required style={{ marginBottom: 20 }} onChange={handleChangeSignIn} />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={{ margin: '20px 0' }} fullWidth onClick={handleLogin}>Sign in</Button>
                <Typography >
                    <Link style={{ cursor: 'pointer' }} >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link style={{ cursor: 'pointer' }} onClick={() => { setClosePopup(false); setOpenPopup(true) }}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
