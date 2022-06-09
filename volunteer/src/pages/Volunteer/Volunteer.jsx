import Navbar from '../../components/Navbar/Navbar'
import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';
import AlarmIcon from '@mui/icons-material/Alarm';
import List from '../../components/table/Table'
import Popup from '../../components/popup/Popup';
import './Volunteer.scss'
import { useState } from 'react';
import ShortTermForm from '../../components/form/ShortTermForm';
import LongTermForm from '../../components/form/LongTermForm';

export default function Volunteer() {
    const [openLongTerm, setOpenLongTerm] = useState(false);
    const [openShortTerm, setOpenShortTerm] = useState(false);
    return (
        <div className="volunteerContainer">
            <Navbar />
            <div className="volunteerEvents">
                <div className="bottomTopSection">
                    <h1 className="title">Assigned Tasks</h1>
                    <div className="bottomButtons">
                        <Button variant="contained" size="medium" endIcon={<AlarmIcon />} className="ShortTermBtn" onClick={() => { setOpenShortTerm(true); }}>
                            Short Term
                        </Button>
                        <Popup
                            title="Short Term Volunteer"
                            openPopup={openShortTerm}
                            setOpenPopup={setOpenShortTerm}
                        >
                            <ShortTermForm />
                        </Popup>
                        <Button variant="contained" size="medium" endIcon={<EventIcon />} onClick={() => { setOpenLongTerm(true); }}>
                            Long Term
                        </Button>
                        <Popup
                            title="Long Term Volunteer"
                            openPopup={openLongTerm}
                            setOpenPopup={setOpenLongTerm}
                        >
                            <LongTermForm />
                        </Popup>
                    </div>
                </div>
                <List />
            </div>
        </div>
    )
}
