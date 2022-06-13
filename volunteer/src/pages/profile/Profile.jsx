import Navbar from '../../components/Navbar/Navbar'
import './Profile.scss'
import TextField from '@mui/material/TextField';
import React, { useContext, useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput'
import EditIcon from '@mui/icons-material/Edit';
import Multiselect from '../../components/multiselectDropdown/Multiselect';
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { useNavigate } from "react-router";

export default function Profile() {
  let navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [languagesKnown, setLanguagesKnown] = useState([]);
  const [preferredDistrict, setPreferredDistrict] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("id: ", user.id);
    let payload = volunteer;
    payload.languagesKnown = languagesKnown;
    payload.skills = skills;
    payload.preferredDistrict = preferredDistrict;
    console.log("Volunteer: ", payload);
    try {
      const response = await axios.post(`/volunteers/edit/${user.id}`, payload, {withCredentials: true});
      console.log(response.data);
      navigate("/");
    } catch (error) {
      window.alert("Fill in all the required fields");
    }
  };
  const [volunteer, setVolunteer] = useState({
    name: "",
    username: "",
    password: "",
    age: 0,
    phoneno: "",
    email: "",
    profession: "",
    organization: "",
    addresss: "",
    town: "",
    district: "",
    city: "",
    state: "",
    nationality: "",
    academicQualification: "",
    volunteerReason: "",
  });

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const response = await axios.get(`/volunteers/getDetails/${user.id}`, { withCredentials: true });
        console.log(response.data);
        setTimeout(() => {
          setVolunteer(response.data);
        }, 0);
      } catch (error) {
        console.log(error);
      }
    }

    fetchVolunteer();
    // return () => {
    //   second
    // }
  }, [user])

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const languages = ["English", "Hindi", "Marathi", "Urdu", "Tamil", "Gujrati"];
  const skillsList = [
    "Story Telling",
    "Photography",
    "Writing and editing",
    "Board Games",
    "Computer",
    "Social Medai Handling",
    "Program Ambassdor",
    "LiterarySkills",
    "NegotiationSkills",
    "Designing",
    "Arts and Craft",
  ];

  const district = [
    "Outside Mumbai",
    "Navi Mumbai",
    "Central zone",
    "Western Zone",
    "Harbour Zone",
    "In - Office (Mahim)",
  ];

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            <form onSubmit={(e) => {
              e.preventDefault();
            }}>
              <div className="newForm">
                <div className="rightOne">
                  <TextField
                    required
                    label="Name"
                    fullWidth
                    placeholder='Enter your name'
                    style={{ marginBottom: 20 }}
                    value={volunteer.name}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, name: e.target.value })
                    }}
                  />
                  <FormControl fullWidth style={{ marginBottom: 20 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      type={values.showPassword ? 'text' : 'password'}
                      value={volunteer.password}
                      onChange={(e) => {
                        setVolunteer({ ...volunteer, password: e.target.value })
                      }}
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
                    label="Phone Number"
                    fullWidth
                    placeholder='Enter your phone number'
                    style={{ marginBottom: 20 }}
                    value={volunteer.phoneno}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, phoneno: e.target.value })
                    }}
                  />
                  <TextField
                    required
                    label="Profession"
                    fullWidth
                    placeholder='Enter your profession'
                    style={{ marginBottom: 20 }}
                    value={volunteer.profession}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, profession: e.target.value })
                    }}
                  />
                  <Multiselect
                    label="Skills Known"
                    list={skillsList}
                    setState={setSkills}
                  />
                  <TextField
                    required
                    label="District"
                    fullWidth
                    placeholder='Enter the district'
                    style={{ marginBottom: 20 }}
                    value={volunteer.district}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, district: e.target.value })
                    }}
                  />
                  <TextField
                    required
                    label="City"
                    fullWidth
                    placeholder='Enter the city'
                    style={{ marginBottom: 20 }}
                    value={volunteer.city}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, city: e.target.value })
                    }}
                  />
                  <Multiselect
                    label="Preferred District"
                    list={district}
                    setState={setPreferredDistrict}
                  />
                  <TextField
                    required
                    label="Academic Qualification"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter your academic qualification'
                    value={volunteer.academicQualification}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, academicQualification: e.target.value })
                    }}
                  />
                </div>
                <div className="rightTwo">
                  <TextField
                    required
                    label="Username"
                    fullWidth
                    placeholder='Enter your username'
                    style={{ marginBottom: 20 }}
                    value={volunteer.username}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, username: e.target.value })
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Age"
                    type="number"
                    placeholder='Enter your age'
                    style={{ marginBottom: 20 }}
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                    value={volunteer.age}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, age: e.target.value })
                    }}
                  />
                  <TextField
                    required
                    label="Email"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter your email'
                    value={volunteer.email}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, email: e.target.value })
                    }}
                  />
                  <TextField
                    required
                    label="Organization"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter the organization name'
                    value={volunteer.organization}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, organization: e.target.value })
                    }}
                  />
                  <TextField
                    required
                    label="Address"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter your address'
                    value={volunteer.addresss}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, addresss: e.target.value })
                    }}
                  />
                  <TextField
                    required
                    label="Town"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter the town of the event'
                    value={volunteer.town}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, town: e.target.value })
                    }}
                  />
                  <TextField
                    required
                    label="State"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter the state of the event'
                    value={volunteer.state}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, state: e.target.value })
                    }}
                  />
                  <TextField
                    required
                    label="Nationality"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    placeholder='Enter your nationality'
                    value={volunteer.nationality}
                    onChange={(e) => {
                      setVolunteer({ ...volunteer, nationality: e.target.value })
                    }}
                  />

                  <Multiselect
                    label="Languages Known"
                    list={languages}
                    setState={setLanguagesKnown}
                  />
                </div>
              </div>
              <div className="addBtnWrapper" style={{ width: "50%", margin: "10px auto 0 auto" }}>
                <Button size="large" variant="outlined" endIcon={<EditIcon />} fullWidth onClick={handleSubmit}>Edit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
