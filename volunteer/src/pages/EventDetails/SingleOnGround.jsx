import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Popup from '../../components/popup/Popup';
import AskToyBank from '../../components/form/AskToyBank'
import ForumIcon from '@mui/icons-material/Forum';
import MeetLinks from '../../components/table/MeetLinks';
import axios from 'axios'

export default function SingleOnGround() {
    const [openMail, setOpenMail] = useState(false);
    const EventID = useParams().eventId;
    const [event, setEvent] = useState({});
    const [meetLinks, setMeetLinks] = useState([]);
    useEffect(() => {
        async function fetchEvent() {
            console.log(EventID);
            try {
                const response = await axios.get(`/onGroundEvents/getDetails/${EventID}`, { withCredentials: true });
                console.log("Response: ", response.data);
                setEvent(response.data.onGroundEvent);
                response.data.onGroundEvent.scheduledMeet && setMeetLinks([...meetLinks, response.data.onGroundEvent.scheduledMeet])
            } catch (error) {
                console.log(error);
            }
        };
        EventID && fetchEvent();

        // return () => {
        //     second
        // }
    }, [EventID])
    return (
        <>
            <div className="left">
                <h1 className="title">Information</h1>
                <div className="item">
                    <div className="details">
                        <h1 className="itemTitle">{event.name ? event.name : 'No Name'}</h1>
                        <div className="alldetails">
                            <div className="leftdetails">
                                <div className="detailItem">
                                    <span className="itemKey">Type of Event:</span>
                                    <span className="itemValue">
                                        {event.typeOfEvent}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Date:</span>
                                    <span className="itemValue">
                                        {event.date ? event.date.split('T')[0] : '--/--/--'}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Start Time:</span>
                                    <span className="itemValue">{event.StartTime ? event.StartTime : '--:--'}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">End Time:</span>
                                    <span className="itemValue">{event.EndTime ? event.EndTime : '--:--'}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Description:</span>
                                    <span className="itemValue">
                                        {event.description ? event.description : 'No Description added'}
                                    </span>
                                </div>

                            </div>
                            <div className="rightdetails">
                                <div className="detailItem">
                                    <span className="itemKey">Venue:</span>
                                    <span className="itemValue">
                                        {event.town + ', ' + event.city + ', ' + event.district + ', ' + event.state}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Volunteers Required:</span>
                                    <span className="itemValue">{event.noOfVolunteersRequired ? event.noOfVolunteersRequired : '--'}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Languages:</span>
                                    <span className="itemValue">
                                        {event.languagesRequired?.map(langauge => (
                                            langauge + ' '
                                        ))}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Skills Required:</span>
                                    <span className="itemValue">
                                        {event.skillsRequired?.map(skill => (
                                            skill + ' '
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="volunteerMeets">
                <div className="bottomTopSection">
                    <h1 className="title">Meet Links (if any) </h1>
                    <div className="bottomButtons">
                        <Button variant="contained" size="medium" endIcon={<ForumIcon />} onClick={() => { setOpenMail(true); }}>
                            Ask Toybank
                        </Button>
                        <Popup
                            title="Send a mail to admin"
                            openPopup={openMail}
                            setOpenPopup={setOpenMail}
                        >
                            <AskToyBank EventID={EventID} closeForm={setOpenMail}/>
                        </Popup>
                    </div>
                </div>
                <MeetLinks impRow={meetLinks}/>
            </div>
        </>
    )
}
