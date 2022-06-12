import './Event.css'
import ArrangedCards from '../../components/ArrangedCards/ArrangedCards'
import Navbar from '../../components/Navbar/Navbar'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

export default function Events() {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        console.log(user.id);
        async function fetchUpcomingEvents() {
            try {
                const response = await axios.get(`/volunteers/upcomingEvents/${user.id}`, { withCredentials: true });
                console.log("Upcoming: ", response.data);
            } catch (error) {
                console.log(error);
            }
        };
        async function fetchPastEvents() {
            try {
                const response = await axios.get(`/volunteers/pastEvents/${user.id}`, { withCredentials: true });
                console.log("Past: ", response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUpcomingEvents();
        fetchPastEvents();

        // return () => {
        //   second
        // }
    }, [user])
    return (
        <div className="EventLayout">
            <Navbar />
            <div className="EventLayoutBottom">
                <div className="upcomingEvents">
                    <div className="heading">
                        <h1>Upcoming Events</h1>
                    </div>
                    <ArrangedCards type="own" />
                </div>
                <hr style={{ width: "99%", marginTop: '50px', marginBottom: '50px' }} />
                <div className="pastEvents">
                    <div className="heading">
                        <h1>Past Events</h1>
                    </div>
                    <ArrangedCards type="own" />
                </div>
            </div>
        </div>
    )
}