import { Button } from '@mui/material'
import InputIcon from '@mui/icons-material/Input';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import './SignUp.scss'
import LoginForm from '../../components/form/LoginForm';
import { useState } from 'react';
import Popup from '../../components/popup/Popup';
import MultiStep from '../MultiStep/MultiStep'

export default function SignUp() {
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    return (
        <div className="signUpLayout">
            <div className="signUpNavbar">
                <div className="navbarLogo">
                    <img src='http://localhost:3000/assets/toybank.jpeg' alt="Toybank" />
                </div>
                <div className="btn">
                    <Button variant="outlined" color="error" size="medium" endIcon={<InputIcon />} onClick={() => setOpenLogin(true)}>
                        Sign In
                    </Button>
                </div>
            </div>
            <div className="signUpMiddle">
                <div className="Section_top">
                    <div className="content">
                        <div className="contentSection">
                            <h1>Join Us In The Journey</h1>
                            <Button variant="contained" color="success" size="large" endIcon={<AppRegistrationIcon />} onClick={() => setOpenSignUp(true)} >
                                Sign Up
                            </Button>
                            <Popup
                                title="SIGN IN"
                                openPopup={openLogin}
                                setOpenPopup={setOpenLogin}
                            >
                                <LoginForm setOpenPopup={setOpenSignUp} setClosePopup={setOpenLogin}/>
                            </Popup>
                            <Popup
                                title="SIGN UP"
                                openPopup={openSignUp}
                                setOpenPopup={setOpenSignUp}
                            >
                                <MultiStep />
                            </Popup>
                        </div>
                    </div>
                </div>
            </div >
            <div className="signUpBottom">

            </div>
        </div >
    )
}
