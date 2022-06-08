import "./OnGroundNew.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
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
import MultipleSelect from "../../components/multiselectDropdown/Multiselect";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const OnGroundNew = ({ title, type, category }) => {
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
  const [file, setFile] = useState("");
  const [date, setDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(null)
  const [endTime, setEndTime] = React.useState(null)

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <div className="fileInputDiv">
              <label htmlFor="file">
                <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="right">
            <form>
              <div className="newForm">
                <div className="rightOne">
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
                  {category === 'onGround' &&
                    <>
                      <TextField
                        required
                        id="outlined-required"
                        label="City"
                        fullWidth
                        style={{ marginBottom: 20 }}
                        placeholder='Enter the city of the event'
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="District"
                        fullWidth
                        style={{ marginBottom: 20 }}
                        placeholder='Enter the district of the event'
                      />
                    </>}
                  <MultipleSelect label="Languages Required" list={list1} />
                </div>
                <div className="rightTwo">
                  <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    fullWidth
                    placeholder='Enter the name of the event'
                    style={{ marginBottom: 20 }}
                  />
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
                  {category === 'onGround' ?
                    <TextField
                      required
                      id="outlined-required"
                      label="Venue"
                      fullWidth
                      style={{ marginBottom: 20 }}
                      placeholder='Enter the venue of the event'
                    />
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
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="State"
                        fullWidth
                        style={{ marginBottom: 20 }}
                        placeholder='Enter the state of the event'
                      />
                    </>
                  }
                  <MultipleSelect label="Skills Required" list={list1} />
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
                {type === 'edit' ?
                  <Button size="large" variant="outlined" endIcon={<EditIcon />}>Edit</Button>
                  : <Button size="large" variant="outlined" endIcon={<AddCircleIcon />}>Add New</Button>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnGroundNew;
