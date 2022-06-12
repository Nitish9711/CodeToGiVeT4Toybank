import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
// import Multiselect from '../multiselectDropdown/Multiselect';

function LongTermForm({ setClose }) {
    const [endDate, setendDate] = React.useState(new Date());
    const [startDate, setstartDate] = React.useState(new Date());
    const [day, setday] = React.useState("");
    const [time, settime] = React.useState(new Date());
    const [typeOfEvent, setTypeOfEvent] = React.useState("");
    const { user } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                endDate,
                startDate,
                day,
                time: new Date(time).toLocaleTimeString(),
                typeOfEvent,
                islong:true
            }
            const res = await axios.post(`/volunteers/setAvailability/${user.id}`, payload, { withCredentials: true });
            console.log("Result: ", res.data);
            setClose(false);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="formLayout" style={{
            width: "600px",
            display: "flex",
            flexDirection: "column"
        }}>
            <form>
                <FormControl fullWidth style={{ marginBottom: 20 }} required>
                    <InputLabel id="demo-simple-select-label">Type of Event</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Type of Volunteers"
                        value={typeOfEvent}
                        onChange={(e) => {
                            setTypeOfEvent(e.target.value);
                        }}
                    >
                        <MenuItem value="onGround">On Ground</MenuItem>
                        <MenuItem value="virtual">Virtual</MenuItem>
                        <MenuItem value="both">Both</MenuItem>
                    </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="From (mm/dd/yyyy)"
                        openTo="day"
                        views={['year', 'month', 'day']}
                        value={startDate}
                        onChange={(newValue) => {
                            setstartDate(newValue);
                        }}
                        renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                    />
                    <DatePicker
                        label="To (mm/dd/yyyy)"
                        openTo="day"
                        views={['year', 'month', 'day']}
                        value={endDate}
                        onChange={(newValue) => {
                            setendDate(newValue);
                        }}
                        renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                    />
                    <TimePicker
                        label="Select Time"
                        value={time}
                        required
                        onChange={(newValue) => {
                            settime(newValue)
                        }}
                        renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                    />
                </LocalizationProvider>
                <FormControl fullWidth style={{ marginBottom: 20 }} required>
                    <InputLabel id="demo-simple-select-label">Select Day</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select Day"
                        value={day}
                        onChange={(e) => {
                            setday(e.target.value);
                        }}
                    >
                        <MenuItem value="Monday">Monday</MenuItem>
                        <MenuItem value="Tuesday">Tuesday</MenuItem>
                        <MenuItem value="Wednesday">Wednesday</MenuItem>
                        <MenuItem value="Thursday">Thursday</MenuItem>
                        <MenuItem value="Friday">Friday</MenuItem>
                        <MenuItem value="Saturday">Saturday</MenuItem>
                        <MenuItem value="Sunday">Sunday</MenuItem>
                    </Select>
                </FormControl>
                {/* <Multiselect label="Select Days" list={Days} /> */}
                <Button variant="contained" color="success" endIcon={<AddCircleOutlinedIcon />} onClick={handleSubmit}>
                    Add
                </Button>
            </form>
        </div>
    )
}

export default LongTermForm;