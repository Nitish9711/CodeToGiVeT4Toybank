import Navbar from '../../components/Navbar/Navbar'
import './Profile.scss'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput'
import EditIcon from '@mui/icons-material/Edit';
import Multiselect from '../../components/multiselectDropdown/Multiselect';
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'

export default function Profile() {
  const list1 = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const [date, setDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(null)
  const [endTime, setEndTime] = React.useState(null)
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
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };
  return (
    <div className="profileLayout">
      <Navbar />
      <div className="profileContainer">
        <div className="top">
          <h1>Edit your Profile</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="newForm">
                <div className="rightOne">
                  <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    fullWidth
                    placeholder='Enter your name'
                    style={{ marginBottom: 20 }}
                  />
                  <FormControl fullWidth style={{ marginBottom: 20 }} variant="outlined">
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
                  <TextField
                    required
                    id="outlined-required"
                    label="Phone Number"
                    fullWidth
                    placeholder='Enter your phone number'
                    style={{ marginBottom: 20 }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Profession"
                    fullWidth
                    placeholder='Enter your profession'
                    style={{ marginBottom: 20 }}
                  />
                  <Multiselect label="Skills Known" list={list1} />
                  <TextField
                    required
                    id="outlined-required"
                    label="District"
                    fullWidth
                    placeholder='Enter the district'
                    style={{ marginBottom: 20 }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="City"
                    fullWidth
                    placeholder='Enter the city'
                    style={{ marginBottom: 20 }}
                  />
                  <Multiselect label="Preferred District" list={list1} />
                  <TextField
                    required
                    id="outlined-required"
                    label="Academic Qualification"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter your academic qualification'
                  />
                </div>
                <div className="rightTwo">
                  <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    fullWidth
                    placeholder='Enter your username'
                    style={{ marginBottom: 20 }}
                  />
                  <TextField
                    id="outlined-number"
                    fullWidth
                    label="Age"
                    type="number"
                    placeholder='Enter your age'
                    style={{ marginBottom: 20 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter your email'
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Organization"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter the organization name'
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Address"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter your address'
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Town"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter the town of the event'
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="State"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter the state of the event'
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Nationality"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter your nationality'
                  />

                  <Multiselect label="Languages Known" list={list1} />
                </div>
              </div>
              <div className="addBtnWrapper" style={{width: "50%", margin: "10px auto 0 auto"}}>
                <Button size="large" variant="outlined" endIcon={<EditIcon />} fullWidth>Edit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
