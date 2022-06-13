import Navbar from '../../components/Navbar/Navbar'
import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';
import AlarmIcon from '@mui/icons-material/Alarm';
import List from '../../components/table/Table'
import Popup from '../../components/popup/Popup';
import './Volunteer.scss'
import { useContext, useState, useEffect } from 'react';
import ShortTermForm from '../../components/form/ShortTermForm';
import LongTermForm from '../../components/form/LongTermForm';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios'

export default function Volunteer() {
    const [openLongTerm, setOpenLongTerm] = useState(false);
    const [openShortTerm, setOpenShortTerm] = useState(false);
    const [availibility, setAvailibility] = useState([])
    const { user } = useContext(AuthContext);
    useEffect(() => {
        async function fetchDetails() {
            try {
                const response = await axios.get(`/volunteers/getDetails/${user.id}`, { withCredentials: true });
                const response2 = await axios.get(`/volunteers/getDetails/${user.id}`, { withCredentials: true });
                setAvailibility(response.data.availibility);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDetails();

        // return () => {
        //   second
        // }
    }, [user])
    return (
        <div className="volunteerContainer">
            <Navbar />
            <div className="volunteerEvents">
                <div className="bottomTopSection">
                    <h1 className="title">Availability</h1>
                    <div className="bottomButtons">
                        <Button variant="contained" size="medium" endIcon={<AlarmIcon />} className="ShortTermBtn" onClick={() => { setOpenShortTerm(true); }}>
                            Short Term
                        </Button>
                        <Popup
                            title="Short Term Volunteer"
                            openPopup={openShortTerm}
                            setOpenPopup={setOpenShortTerm}
                        >
                            <ShortTermForm setClose={setOpenShortTerm} />
                        </Popup>
                        <Button variant="contained" size="medium" endIcon={<EventIcon />} onClick={() => { setOpenLongTerm(true); }}>
                            Long Term
                        </Button>
                        <Popup
                            title="Long Term Volunteer"
                            openPopup={openLongTerm}
                            setOpenPopup={setOpenLongTerm}
                        >
                            <LongTermForm setClose={setOpenLongTerm}/>
                        </Popup>
                    </div>
                </div>
                <List listbro={availibility} volunteerID={user.id}/>
            </div>
        </div>
    )
}
