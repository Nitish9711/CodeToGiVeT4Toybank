import "./singleVirtualEvent.scss";
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

const SingleVirtualEvent = () => {
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
                <h1 className="itemTitle">Random Event Name</h1>
                <div className="alldetails">
                  <div className="leftdetails">
                    <div className="detailItem">
                      <span className="itemKey">Date:</span>
                      <span className="itemValue">
                        06 June 2022
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Time:</span>
                      <span className="itemValue">17:38:58 GMT+0530</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Description:</span>
                      <span className="itemValue">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae ullam, fugit suscipit unde, voluptatum eum magni, dolorum commodi ut architecto facilis soluta harum laudantium.
                      </span>
                    </div>
                  </div>
                  <div className="rightdetails">
                    <div className="detailItem">
                      <span className="itemKey">Link (if any):</span>
                      <span className="itemValue">
                        http://localhost:5000/login
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Volunteers Required:</span>
                      <span className="itemValue">5</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Languages:</span>
                      <span className="itemValue">
                        English, Hindi, Marathi
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Skills Required:</span>
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
        <div className="bottom">
          <div className="bottomTopSection">
            <h1 className="title">Assigned Volunteers</h1>
            <div className="bottomButtons">
              <Button variant="contained" size="medium" endIcon={<AlarmIcon />} className="MeetBtn" onClick={() => { setOpenPopup(true); }}>
                Schedule Meeting
              </Button>
              <Popup
                title="Schedule a meeting"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
              >
                <Form />
              </Popup>
              <Button variant="contained" size="medium" endIcon={<SendIcon />} onClick={() => { setOpenMail(true); }}>
                Send Mail
              </Button>
              <Popup
                title="Send Mail to Volunteers"
                openPopup={openMail}
                setOpenPopup={setOpenMail}
              >
                <MailForm />
              </Popup>
            </div>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SingleVirtualEvent;
