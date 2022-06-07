import "./singleVolunteer.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import * as React from 'react';
import Popup from "../../components/popup/Popup"
import MailForm from "../../components/mailForm/mailForm";
import Form from "../../components/form/Form";

const SingleVolunteer = () => {
    const [openPopup, setOpenPopup] = React.useState(false);
    const [openMail, setOpenMail] = React.useState(false);
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Random Volunteer Name</h1>
                                <div className="alldetails">
                                    <div className="leftdetails">
                                        <div className="detailItem">
                                            <span className="itemKey">Username:</span>
                                            <span className="itemValue">
                                                Test_volunteer
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Age:</span>
                                            <span className="itemValue">24</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Email Id:</span>
                                            <span className="itemValue">
                                                test@gmail.com
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Contact:</span>
                                            <span className="itemValue">
                                                +91 1234567890
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Organization:</span>
                                            <span className="itemValue">
                                                Morgan Stanley
                                            </span>
                                        </div>
                                    </div>
                                    <div className="rightdetails">
                                        <div className="detailItem">
                                            <span className="itemKey">Address:</span>
                                            <span className="itemValue">
                                                Elton St. 234 Garden Yd. NewYork
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Academic Qualification:</span>
                                            <span className="itemValue">Graduation</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Profession:</span>
                                            <span className="itemValue">Student</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Languages Known:</span>
                                            <span className="itemValue">
                                                English, Hindi, Marathi
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Skills Known:</span>
                                            <span className="itemValue">
                                                Analytical, Problem Solving, Leadership
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="volunteerbottom">
                    <div className="bottomButtons">
                        <div className="btn1">
                            <Button variant="contained" size="medium" endIcon={<AlarmIcon />} className="MeetBtn" onClick={() => { setOpenPopup(true); }}>
                                Schedule Meeting
                            </Button>
                        </div>
                        <Popup
                            title="Schedule a meeting"
                            openPopup={openPopup}
                            setOpenPopup={setOpenPopup}
                        >
                            <Form />
                        </Popup>
                        <div className="btn2">
                            <Button variant="contained" size="medium" endIcon={<SendIcon />} onClick={() => { setOpenMail(true); }}>
                                Send Mail
                            </Button>
                        </div>
                        <Popup
                            title="Send Mail to Volunteers"
                            openPopup={openMail}
                            setOpenPopup={setOpenMail}
                        >
                            <MailForm />
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleVolunteer;
