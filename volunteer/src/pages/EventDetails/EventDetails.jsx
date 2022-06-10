import './EventDetails.scss';
import Navbar from '../../components/Navbar/Navbar';
import Button from '@mui/material/Button';
import List from '../../components/table/Table'
import Popup from '../../components/popup/Popup';
import { useState } from 'react';
import AskToyBank from '../../components/form/AskToyBank'
import ForumIcon from '@mui/icons-material/Forum';
import MeetLinks from '../../components/table/MeetLinks';

export default function EventDetails({ type }) {
    const [openMail, setOpenMail] = useState(false);
    return (
        <div className="eventDetailsContainer">
            <Navbar />
            <div className="detailsTopSection">
                <div className="left">
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <div className="details">
                            <h1 className="itemTitle">Random Event Name</h1>
                            {type === 'onGround' ?
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
                                            <span className="itemKey">Address:</span>
                                            <span className="itemValue">
                                                Elton St. 234 Garden Yd. NewYork
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
                                :
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
                            }
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
                                <AskToyBank/>
                            </Popup>
                        </div>
                    </div>
                    <MeetLinks />
                </div>
            </div>
        </div>
    )
}
