import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function LoginForm({ setOpenPopup, setClosePopup }) {
    return (
        <Grid>
            <Paper elevation={0} style={{ padding: 20, width: 280, margin: "10px auto" }}>
                <Grid align='center' style={{ marginBottom: '10px' }}>
                    <Avatar style={{ backgroundColor: '#1bbd7e' }} size="large"><LockIcon /></Avatar>
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
                <Button type='submit' color='primary' variant="contained" style={{ margin: '20px 0' }} fullWidth>Sign in</Button>
                <Typography >
                    <Link style={{cursor: 'pointer'}} >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link style={{cursor: 'pointer'}} onClick={() => { setClosePopup(false); setOpenPopup(true) }}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
