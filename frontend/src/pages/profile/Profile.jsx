import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import './Profile.scss'
import { Button } from '@material-ui/core'
import BackupIcon from '@mui/icons-material/Backup';

function Profile() {
    const [values, setValues] = React.useState({
        username: '',
        name: '',
        password: '',
        confirmPassword: '',
        showConfirmPassword: false,
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="profile">
            <Sidebar />
            <div className="profileContainer">
                <Navbar />
                <div div className="profileTop">
                    <h1>Edit Profile</h1>
                </div>
                <div className="profileBottom">
                    <div className="profileLeft">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    </div>
                    <div className="profileRight">
                        <form>
                            <div className="profileRightOne">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    fullWidth
                                    placeholder='Enter your name'
                                    style={{ marginBottom: 50 }}
                                />
                                <FormControl fullWidth style={{ marginBottom: 50 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </div>
                            <div className="profileRightTwo">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Username"
                                    fullWidth
                                    placeholder='Enter your username'
                                    style={{ marginBottom: 50 }}
                                />
                                <FormControl fullWidth style={{ marginBottom: 50 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showConfirmPassword ? 'text' : 'password'}
                                        value={values.confirmPassword}
                                        onChange={handleChange('confirmPassword')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Confirm Password"
                                    />
                                </FormControl>
                            </div>
                        </form>
                        <div className="profileBtnWrapper">
                            <Button variant="outlined" color="success" endIcon={<BackupIcon />} className="profileBtn">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile