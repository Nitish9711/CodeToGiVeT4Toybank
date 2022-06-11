import React from 'react'
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MultipleSelect from '../multiselectDropdown/Multiselect';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function NewOnGround({ type }) {
    const [languagesRequire, setLanguagesRequire] = useState([]);
    const [skillsRequire, setSkillsRequire] = useState([]);
    let navigate = useNavigate();
    const [event, setEvent] = useState({
        name: "",
        date: new Date(),
        StartTime: new Date(),
        EndTime: new Date(),
        typeOfEvent: "",
        description: "",
        noOfVolunteersRequired: 0,
        typeOfVolunteers: "",
        languagesRequired: [],
        skillsRequired: [],
        linksIfAny: [],
    })
    const languages = [
        'English',
        'Hindi',
        'Marathi',
    ];
    const skills = [
        'Story Telling',
        'Photography',
        'Writing and editing',
        'Board Games'
    ];
    const typeOfEvent = [
        "Play sessions with Children",
        "Toy collection and Distribution",
        "Inventory and Gameplay",
        "Research and Impact Assessments",
        "Events and Fundraising",
        "Content and Design",
        "Toybank Ambassador",
    ];

    const handleAdd = async (e) => {
        e.preventDefault();
        let payload = event;
        payload.languagesRequired = languagesRequire;
        payload.skillsRequired = skillsRequire;
        payload.StartTime = new Date(payload.StartTime).toLocaleTimeString();
        payload.EndTime = new Date(payload.EndTime).toLocaleTimeString();
        console.log(payload);
        try {
            const response = await axios.post('/virtualEvents/create', payload, { withCredentials: true });
            console.log(response.data);
            navigate('/virtual');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form>
            <div className="newForm">
                <div className="rightOne">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Select Date (mm/dd/yyyy)"
                            openTo="day"
                            views={['year', 'month', 'day']}
                            value={event.date}
                            onChange={(newValue) => {
                                setEvent({ ...event, date: newValue })
                            }}
                            renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                        />

                        <TimePicker
                            label="Select Starting Time"
                            value={event.StartTime}
                            required
                            onChange={(newValue) => {
                                setEvent({ ...event, StartTime: newValue })
                            }}
                            renderInput={(params) => <TextField style={{ marginBottom: 20 }} fullWidth {...params} />}
                        />
                        <TimePicker
                            label="Select Ending Time"
                            value={event.EndTime}
                            required
                            onChange={(newValue) => {
                                setEvent({ ...event, EndTime: newValue })
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
                            value={event.typeOfVolunteers}
                            onChange={(e) => {
                                setEvent({ ...event, typeOfVolunteers: e.target.value })
                            }}
                        >
                            <MenuItem value="Students">Students</MenuItem>
                            <MenuItem value="Professionals">Professionals</MenuItem>
                        </Select>
                    </FormControl>
                    <MultipleSelect label="Languages Required" list={languages} setState={setLanguagesRequire} />
                </div>
                <div className="rightTwo">
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        fullWidth
                        placeholder='Enter the name of the event'
                        style={{ marginBottom: 20 }}
                        value={event.name}
                        onChange={(e) => {
                            setEvent({ ...event, name: e.target.value })
                        }}
                    />
                    <FormControl fullWidth style={{ marginBottom: 20 }} required>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Type"
                            value={event.typeOfEvent}
                            onChange={(e) => {
                                setEvent({ ...event, typeOfEvent: e.target.value })
                            }}
                        >
                            {typeOfEvent.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
                        value={event.noOfVolunteersRequired}
                        onChange={(e) => {
                            setEvent({ ...event, noOfVolunteersRequired: e.target.value })
                        }}
                    />

                    <TextField
                        id="outlined-required"
                        label="Link (if any)"
                        fullWidth
                        placeholder='Enter the link'
                        style={{ marginBottom: 20 }}
                        value={event.linksIfAny}
                        onChange={(e) => {
                            setEvent({ ...event, linksIfAny: e.target.value })
                        }}
                    />

                    <MultipleSelect label="Skills Required" list={skills} setState={setSkillsRequire} />
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
                value={event.description}
                onChange={(e) => {
                    setEvent({ ...event, description: e.target.value })
                }}
            />
            <div className="addBtnWrapper">
                {type === 'edit' ?
                    <Button size="large" variant="outlined" endIcon={<EditIcon />}>Edit</Button>
                    : <Button size="large" variant="outlined" endIcon={<AddCircleIcon />} onClick={handleAdd}>Add New</Button>
                }
            </div>
        </form >
    )
}
