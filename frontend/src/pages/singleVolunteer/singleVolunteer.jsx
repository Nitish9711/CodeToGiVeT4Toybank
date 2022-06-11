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
import PersonIcon from '@mui/icons-material/Person';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleVolunteer = () => {
    const [openPopup, setOpenPopup] = React.useState(false);
    const [openMail, setOpenMail] = React.useState(false);
    const VolunteerID = useParams().volunteerId;
    const [event, setEvent] = React.useState({});
    React.useEffect(() => {
        async function fetchEvent() {
            try {
                const response = await axios.get(`/volunteers/getDetails/${VolunteerID}`, { withCredentials: true });
                setEvent(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        VolunteerID && fetchEvent();

        // return () => {
        //   second
        // }
    }, [VolunteerID])
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Information</h1>
                        <div className="item">
                            {/* <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="itemImg"
                            /> */}
                            <PersonIcon className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">{event.name ? event.name : 'No Name'}</h1>
                                <div className="alldetails">
                                    <div className="leftdetails">
                                        <div className="detailItem">
                                            <span className="itemKey">Username:</span>
                                            <span className="itemValue">
                                                {event.username ? event.username : 'No Username'}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Age:</span>
                                            <span className="itemValue">{event.age ? event.age : '--'}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Email Id:</span>
                                            <span className="itemValue">
                                                {event.email ? event.email : 'No email'}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Contact:</span>
                                            <span className="itemValue">
                                                {event.phoneno ? event.phoneno : '+91 - '}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Organization:</span>
                                            <span className="itemValue">
                                                {event.organization ? event.organization : '--'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="rightdetails">
                                        <div className="detailItem">
                                            <span className="itemKey">Address:</span>
                                            <span className="itemValue">
                                                {event.address ? event.address : 'No Name'}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Academic Qualification:</span>
                                            <span className="itemValue">{event.academicQualification ? event.academicQualification : 'Not Provided'}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Profession:</span>
                                            <span className="itemValue">{event.profession ? event.profession : 'No Provided'}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Languages Known:</span>
                                            <span className="itemValue">
                                                {event.languagesKnown?.map(langauge => (
                                                    langauge + ' '
                                                ))}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Skills Known:</span>
                                            <span className="itemValue">
                                                {event.skills?.map(skill => (
                                                    skill + ' '
                                                ))}
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
                            <MailForm type="volunteer" id={VolunteerID} />
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleVolunteer;
