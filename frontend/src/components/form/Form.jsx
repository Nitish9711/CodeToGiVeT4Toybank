import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import axios from 'axios';

import "./Form.scss"

function Form({ type, id }) {
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(new Date());
    const [purpose, setPurpose] = React.useState("");
    const [title, settitle] = React.useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTime = new Date(time).toLocaleTimeString();
        const payload = {
            date,
            time: newTime,
            purpose,
            title
        };

        const onGroundMeet = async () => {
            try {
                const response = await axios.post(`/onGroundEvents/meetLink/${id}`, payload, { withCredentials: true });
                console.log(response.data);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }

        const virtualMeet = async () => {
            try {
                const response = await axios.post(`/virtualEvents/meetLink/${id}`, payload, { withCredentials: true });
                console.log(response.data);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }

        type === "onGround" ? onGroundMeet() : virtualMeet();
    }
    return (
        <div className="formLayout">
            <form>
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    fullWidth
                    placeholder='Enter the Title'
                    value={title}
                    onChange={(e) => {
                        settitle(e.target.value)
                    }}
                    style={{ marginBottom: 20 }}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
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
                    value={purpose}
                    onChange={(e) => {
                        setPurpose(e.target.value)
                    }}
                />
                <Button variant="contained" color="success" endIcon={<VideoCallIcon />} onClick={handleSubmit}>
                    Schedule Meet
                </Button>
            </form>
        </div>
    )
}

export default Form