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
import Multiselect from '../multiselectDropdown/Multiselect';

const Days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

function LongTermForm() {
    const [toDate, setToDate] = React.useState(new Date());
    const [fromDate, setFromDate] = React.useState(new Date());
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
                    >
                        <MenuItem value="onGround">On Ground</MenuItem>
                        <MenuItem value="virtual">Virtual</MenuItem>
                        <MenuItem value="both">Both</MenuItem>
                    </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        disableFuture
                        label="From (mm/dd/yyyy)"
                        openTo="day"
                        views={['year', 'month', 'day']}
                        value={fromDate}
                        onChange={(newValue) => {
                            setFromDate(newValue);
                        }}
                        renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                    />
                    <DatePicker
                        disableFuture
                        label="To (mm/dd/yyyy)"
                        openTo="day"
                        views={['year', 'month', 'day']}
                        value={toDate}
                        onChange={(newValue) => {
                            setToDate(newValue);
                        }}
                        renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                    />
                </LocalizationProvider>
                <Multiselect label="Select Days" list={Days} />
                <Button variant="contained" color="success" endIcon={<AddCircleOutlinedIcon />}>
                    Add
                </Button>
            </form>
        </div>
    )
}

export default LongTermForm;