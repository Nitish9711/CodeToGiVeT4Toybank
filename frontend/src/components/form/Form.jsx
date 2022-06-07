import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';

import "./Form.scss"

function Form() {
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(null)
    return (
        <div className="formLayout">
            <form>
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    fullWidth
                    placeholder='Enter the Title'
                    style={{ marginBottom: 20 }}
                />
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
                        label="Select Time"
                        value={time}
                        onChange={(newValue) => {
                            setTime(newValue);
                        }}
                        renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                    />
                </LocalizationProvider>

                <TextField
                    required
                    id="outlined-required"
                    label="Purpose"
                    fullWidth
                    placeholder='Enter the purpose of the meet'
                    style={{ marginBottom: 20 }}
                    multiline rows={5}
                />
                <Button variant="contained" color="success" endIcon={<VideoCallIcon />}>
                    Schedule Meet
                </Button>
            </form>
        </div>
    )
}

export default Form