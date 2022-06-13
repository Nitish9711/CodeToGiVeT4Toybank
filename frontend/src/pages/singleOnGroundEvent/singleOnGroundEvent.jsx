import "./singleOnGroundEvent.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import * as React from 'react';
import Popup from "../../components/popup/Popup"
import MailForm from "../../components/mailForm/mailForm";
import Form from "../../components/form/Form";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import EventIcon from '@mui/icons-material/Event';
import axios from 'axios';
import AddForm from "../../components/mailForm/addForm";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const SingleOnGroundEvent = () => {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [openMail, setOpenMail] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const EventID = useParams().eventId;
  const [event, setEvent] = React.useState({});
  const [volunteerList, setVolunteerList] = React.useState([])
  React.useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await axios.get(`/onGroundEvents/getDetails/${EventID}`, { withCredentials: true });
        console.log("Response: ", response.data);
        setVolunteerList(response.data.volunteerList);
        setEvent(response.data.onGroundEvent);
      } catch (error) {
        console.log(error);
      }
      // setUser(response.data);
    };
    EventID && fetchEvent();
    
    // return () => {
      //   second
      // }
    }, [EventID])
    
    const handlePopup = ()=>{
      if(event.volunteers && String(event.volunteers.length) === event.noOfVolunteersRequired )
        window.alert("First Remove some volunteers");
      else
        setOpenAdd(true);
    }

    return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link to={`/onGround/edit/${EventID}`} style={{ textDecoration: "none" }}>
              <div className="editButton">Edit</div>
            </Link>
            <h1 className="title">Information</h1>
            <div className="item">
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <EventIcon className="itemImg" />
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
        </div>
        <div className="bottom">
          <div className="bottomTopSection">
            <h1 className="title">Assigned Volunteers</h1>
            <div className="bottomButtons">
              <Button variant="contained" size="medium" endIcon={<AddCircleOutlineIcon />} className="MeetBtn" onClick={handlePopup}>
                Add Volunteer
              </Button>
              <Button variant="contained" size="medium" endIcon={<AlarmIcon />} className="MeetBtn" onClick={() => { setOpenPopup(true); }}>
                Schedule Meeting
              </Button>
              <Popup
                title="Schedule a meeting"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
              >
                <Form type="onGround" id={EventID} />
              </Popup>
              <Button variant="contained" size="medium" endIcon={<SendIcon />} onClick={() => { setOpenMail(true); }}>
                Send Mail
              </Button>
              <Popup
                title="Send Mail to Volunteers"
                openPopup={openMail}
                setOpenPopup={setOpenMail}
              >
                <MailForm type="onGround" id={EventID} />
              </Popup>
              <Popup
                title="Send Mail to Volunteers"
                openPopup={openAdd}
                setOpenPopup={setOpenAdd}
              >
                <AddForm type="onGround" id={EventID} setClose={setOpenAdd}/>
              </Popup>
            </div>
          </div>
          {volunteerList && <List impRow={volunteerList} type="onGround" id={EventID} />}
        </div>
      </div>
    </div>
  );
};

export default SingleOnGroundEvent;
