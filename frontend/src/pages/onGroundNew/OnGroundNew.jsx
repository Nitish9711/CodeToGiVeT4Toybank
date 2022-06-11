import "./OnGroundNew.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import React from 'react';
import NewOnGround from "../../components/NewForms/NewOnGround";
import NewVirtual from "../../components/NewForms/NewVirtual";
// import EventIcon from '@mui/icons-material/Event';

const OnGroundNew = ({ title, type, category }) => {
  const [event, setEvent] = useState({
    name: "",
    date: new Date(),
    StartTime: "",
    EndTime: "",
    typeOfEvent: "",
    description: "",
    noOfVolunteersRequired: 0,
    typeOfVolunteers: "",
    languagesRequired: [],
    skillsRequired: [],
    venue: "",
    town: "",
    district: "",
    city: "",
    state: "",
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

  const district = [
    "Outside Mumbai",
    "Navi Mumbai",
    "Central zone",
    "Western Zone",
    "Harbour Zone",
    "In - Office (Mahim)",
  ]

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
            {/* <form>
              <div className="newForm">
                <div className="rightOne">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
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
                  {category === 'onGround' &&
                    <>
                      <TextField
                        required
                        id="outlined-required"
                        label="City"
                        fullWidth
                        style={{ marginBottom: 20 }}
                        placeholder='Enter the city of the event'
                        value={event.city}
                        onChange={(NewValue) => {
                          setEvent({ ...event, city: NewValue })
                        }}
                      />
                      <FormControl fullWidth style={{ marginBottom: 20 }} required>
                        <InputLabel id="demo-simple-select-label">District</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="District"
                          value={event.district}
                          onChange={(e) => {
                            setEvent({ ...event, ["district"]: e.target.value })
                          }}
                        >
                          {district.map((name) => (
                            <MenuItem key={name} value={name}>
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </>}
                  <MultipleSelect label="Languages Required" list={languages} />
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
                      setEvent({ ...event, ["name"]: e.target.value })
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
                        setEvent({ ...event, ["typeOfEvent"]: e.target.value })
                      }}
                    >
                      {typeOfEvent.map((name) => (
                        <MenuItem key={name} value={name}>
                          <ListItemText primary={name} />
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
                    onChange={(val) => {
                      setEvent({ ...event, ["noOfVolunteersRequired"]: val })
                    }}
                  />
                  {category === 'onGround' ?
                    <>
                      <TextField
                        id="outlined-required"
                        label="Venue"
                        fullWidth
                        style={{ marginBottom: 20 }}
                        placeholder='Enter the venue of the event'
                        value={event.venue}
                        onChange={(val) => {
                          setEvent({ ...event, ["venue"]: val })
                        }}
                      />
                    </>
                    :
                    <TextField
                      id="outlined-required"
                      label="Link (if any)"
                      fullWidth
                      style={{ marginBottom: 20 }}
                      placeholder='Enter the link of the event'
                    />
                  }
                  {
                    category === 'onGround' &&
                    <>
                      <TextField
                        required
                        id="outlined-required"
                        label="Town"
                        fullWidth
                        style={{ marginBottom: 20 }}
                        placeholder='Enter the town of the event'
                        value={event.town}
                        onChange={(val) => {
                          setEvent({ ...event, ["town"]: val })
                        }}
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="State"
                        fullWidth
                        style={{ marginBottom: 20 }}
                        placeholder='Enter the state of the event'
                        value={event.state}
                        onChange={(val) => {
                          setEvent({ ...event, ["state"]: val })
                        }}
                      />
                    </>
                  }
                  <MultipleSelect label="Skills Required" list={skills} />
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
                onChange={(val) => {
                  setEvent({ ...event, ["description"]: val })
                }}
              />
              <div className="addBtnWrapper">
                {type === 'edit' ?
                  <Button size="large" variant="outlined" endIcon={<EditIcon />}>Edit</Button>
                  : <Button size="large" variant="outlined" endIcon={<AddCircleIcon />} onClick={handleAdd}>Add New</Button>
                }
              </div>
            </form> */}
            {console.log(category)}
            {category === "onGround" ? <NewOnGround type={type} /> : <NewVirtual type={type} />}

          </div>
        </div>
      </div>
    </div>
  );
};

export default OnGroundNew;
