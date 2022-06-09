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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      label="Select Date (mm/dd/yyyy)"
                      openTo="day"
                      views={['year', 'month', 'day']}
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                    />

                    <TimePicker
                      label="Select Starting Time"
                      value={startTime}
                      onChange={(newValue) => {
                        setStartTime(newValue);
                      }}
                      renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                    />
                    <TimePicker
                      label="Select Ending Time"
                      value={endTime}
                      onChange={(newValue) => {
                        setEndTime(newValue);
                      }}
                      renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                    />
                  </LocalizationProvider>
                  <FormControl fullWidth style={{ marginBottom: 20 }} required>
                    <InputLabel id="demo-simple-select-label">Type of Volunteers</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Type of Volunteers"
                    >
                      <MenuItem value="Students">Students</MenuItem>
                      <MenuItem value="Adults">Adults</MenuItem>
                    </Select>
                  </FormControl>
                  <Multiselect label="Languages Required" list={list1} />
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
                  <FormControl fullWidth style={{ marginBottom: 20 }} variant="outlined">
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
                  <TextField
                    required
                    id="outlined-required"
                    label="Type"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter the type of the event'
                  />
                  <TextField
                    id="outlined-number"
                    fullWidth
                    label="Number of Volunteers"
                    type="number"
                    placeholder='Enter the number of volunteers required'
                    style={{ marginBottom: 20 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="outlined-required"
                    label="Link (if any)"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter the link of the event'
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

                  <Multiselect label="Skills Required" list={list1} />
                </div>
              </div>
              <TextField
                required
                id="outlined-required"
                label="Description"
                fullWidth
                placeholder='Enter the description of the event'
                style={{ marginBottom: 20 }}
                multiline rows={5}
              />
              <div className="addBtnWrapper">
                <Button size="large" variant="outlined" endIcon={<EditIcon />}>Edit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
