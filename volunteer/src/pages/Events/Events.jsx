import './Event.css'
import ArrangedCards from '../../components/ArrangedCards/ArrangedCards'
import Navbar from '../../components/Navbar/Navbar'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

export default function Events() {
    const { user } = useContext(AuthContext);
    const [upcoming, setUpcoming] = useState([]);
    const [past, setPast] = useState([]);
    useEffect(() => {
        console.log(user.id);
        async function fetchUpcomingEvents() {
            try {
                const response = await axios.get(`/volunteers/upcomingEvents/${user.id}`, { withCredentials: true });
                setUpcoming(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        async function fetchPastEvents() {
            try {
                const response = await axios.get(`/volunteers/pastEvents/${user.id}`, { withCredentials: true });
                console.log(response.data);
                setPast(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUpcomingEvents();
        fetchPastEvents();

        // return () => {
        //   second
        // }
    }, [user]);
    return (
        <div className="EventLayout">
            <Navbar />
            <div className="EventLayoutBottom">
                <div className="upcomingEvents">
                    <div className="heading">
                        {upcoming.length > 0 ? <h1>Upcoming Events</h1> : <h2>No Data Found For Upcoming Events</h2>}
                    </div>
                    <ArrangedCards type="own" list={upcoming} />
                </div>
                <hr style={{ width: "99%", marginTop: '50px', marginBottom: '50px' }} />
                <div className="pastEvents">
                    <div className="heading">
                        {past.length > 0 ? <h1>Past Events</h1> : <h2>No Data Found For Past Events</h2>}
                    </div>
                    <ArrangedCards type="own" list={past} />
                </div>
            </div>
        </div>
    )
}