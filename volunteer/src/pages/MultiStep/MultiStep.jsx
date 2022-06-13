import React, { useState } from "react";
import { TextField, Button, Stepper, Step, StepLabel } from "@mui/material";
import { FormProvider } from "react-hook-form";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Multiselect from "../../components/multiselectDropdown/Multiselect";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { signUpCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
var BroEmail = "";

function getSteps() {
  return ["Email Verification", "OTP Verification", "Personal Information"];
}
const BasicForm = ({ handleNext }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    try {
      BroEmail = email;
      const payload = {
        email,
      };
      const response = await axios.post(`/util/sendOTP`, payload, {
        withCredentials: true,
      });
      if (response.status === 201) {
        handleNext();
      } else {
        window.alert("Invalid Email");
      }
    } catch (error) {
      console.log(error);
    }
    // handleNext();
  };
  return (
    <>
      <TextField
        id="email"
        label="Enter Email"
        variant="outlined"
        placeholder="Enter Your Email"
        fullWidth
        margin="normal"
        value={email}
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        type="submit"
      >
        Send OTP
      </Button>
    </>
  );
};
const OTPForm = ({ handleNext, handleBack }) => {
  const [OTP, setOTP] = useState("");
  const handleSubmit = async () => {
    try {
      const payload = {
        email: BroEmail,
        otp: OTP,
      };
      const response = await axios.post(`/util/verifyOtp`, payload, {
        withCredentials: true,
      });
      if (response.status === 201) {
        handleNext();
      }
    } catch (error) {
      window.alert("Invalid OTP");
      handleBack();
    }
  };
  return (
    <>
      <TextField
        id="OTP"
        label="Enter OTP"
        variant="outlined"
        placeholder="Enter The OTP"
        fullWidth
        margin="normal"
        value={OTP}
        onChange={(e) => {
          setOTP(e.target.value);
        }}
      />
      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        type="submit"
      >
        Verify OTP
      </Button>
    </>
  );
};
const PersonalForm = () => {
  const { dispatch } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = volunteer;
    payload.languagesKnown = languagesKnown;
    payload.skills = skills;
    payload.preferredDistrict = preferredDistrict;
    console.log("Volunteer: ", payload);
    signUpCall(payload, dispatch);
  };
  const [languagesKnown, setLanguagesKnown] = useState([]);
  const [preferredDistrict, setPreferredDistrict] = useState([]);
  const [skills, setSkills] = useState([]);

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
    <>
      <TextField
        required
        label="Name"
        fullWidth
        placeholder="Enter your name"
        style={{ marginBottom: 20, marginTop: 20 }}
        value={volunteer.name}
        onChange={(e) => {
          setVolunteer({ ...volunteer, name: e.target.value });
        }}
      />
      <FormControl fullWidth style={{ marginBottom: 20 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          type={values.showPassword ? "text" : "password"}
          value={volunteer.password}
          onChange={(e) => {
            setVolunteer({ ...volunteer, password: e.target.value });
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
        placeholder="Enter your phone number"
        style={{ marginBottom: 20 }}
        value={volunteer.phoneno}
        onChange={(e) => {
          setVolunteer({ ...volunteer, phoneno: e.target.value });
        }}
      />
      <TextField
        required
        label="Profession"
        fullWidth
        placeholder="Enter your profession"
        style={{ marginBottom: 20 }}
        value={volunteer.profession}
        onChange={(e) => {
          setVolunteer({ ...volunteer, profession: e.target.value });
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
        placeholder="Enter the district"
        style={{ marginBottom: 20 }}
        value={volunteer.district}
        onChange={(e) => {
          setVolunteer({ ...volunteer, district: e.target.value });
        }}
      />
      <TextField
        required
        label="City"
        fullWidth
        placeholder="Enter the city"
        style={{ marginBottom: 20 }}
        value={volunteer.city}
        onChange={(e) => {
          setVolunteer({ ...volunteer, city: e.target.value });
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
        placeholder="Enter your academic qualification"
        value={volunteer.academicQualification}
        onChange={(e) => {
          setVolunteer({ ...volunteer, academicQualification: e.target.value });
        }}
      />
      <TextField
        required
        label="Username"
        fullWidth
        placeholder="Enter your username"
        style={{ marginBottom: 20 }}
        value={volunteer.username}
        onChange={(e) => {
          setVolunteer({ ...volunteer, username: e.target.value });
        }}
      />
      <TextField
        fullWidth
        label="Age"
        type="number"
        placeholder="Enter your age"
        style={{ marginBottom: 20 }}
        // InputLabelProps={{
        //   shrink: true,
        // }}
        value={volunteer.age}
        onChange={(e) => {
          setVolunteer({ ...volunteer, age: e.target.value });
        }}
      />
      <TextField
        required
        label="Email"
        fullWidth
        style={{ marginBottom: 20 }}
        placeholder="Enter your email"
        value={volunteer.email}
        onChange={(e) => {
          setVolunteer({ ...volunteer, email: e.target.value });
        }}
      />
      <TextField
        required
        label="Organization"
        fullWidth
        style={{ marginBottom: 20 }}
        placeholder="Enter the organization name"
        value={volunteer.organization}
        onChange={(e) => {
          setVolunteer({ ...volunteer, organization: e.target.value });
        }}
      />
      <TextField
        required
        label="Address"
        fullWidth
        style={{ marginBottom: 20 }}
        placeholder="Enter your address"
        value={volunteer.addresss}
        onChange={(e) => {
          setVolunteer({ ...volunteer, addresss: e.target.value });
        }}
      />
      <TextField
        required
        label="Town"
        fullWidth
        style={{ marginBottom: 20 }}
        placeholder="Enter the town of the event"
        value={volunteer.town}
        onChange={(e) => {
          setVolunteer({ ...volunteer, town: e.target.value });
        }}
      />
      <TextField
        required
        label="State"
        fullWidth
        style={{ marginBottom: 20 }}
        placeholder="Enter the state of the event"
        value={volunteer.state}
        onChange={(e) => {
          setVolunteer({ ...volunteer, state: e.target.value });
        }}
      />
      <TextField
        required
        label="Nationality"
        fullWidth
        style={{ marginBottom: 20 }}
        placeholder="Enter your nationality"
        value={volunteer.nationality}
        onChange={(e) => {
          setVolunteer({ ...volunteer, nationality: e.target.value });
        }}
      />
      <Multiselect
        label="Languages Known"
        list={languages}
        setState={setLanguagesKnown}
      />
      <TextField
        required
        label="Why you wish to volunteer?"
        multiline
        rows={5}
        fullWidth
        style={{ marginBottom: 20 }}
        placeholder="Enter your reason"
        value={volunteer.volunteerReason}
        onChange={(e) => {
          setVolunteer({ ...volunteer, volunteerReason: e.target.value });
        }}
      />

      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        type="submit"
      >
        Submit Form
      </Button>
    </>
  );
};

function getStepContent(step, handleNext, handleBack) {
  switch (step) {
    case 0:
      return <BasicForm handleNext={handleNext} />;
    case 1:
      return <OTPForm handleNext={handleNext} handleBack={handleBack} />;
    case 2:
      return <PersonalForm handleNext={handleNext} />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div style={{ width: "650px" }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <>
        <FormProvider>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {getStepContent(activeStep, handleNext, handleBack)}
          </form>
        </FormProvider>
      </>
    </div>
  );
};

export default LinaerStepper;
