import './Event.css'
import ArrangedCards from '../../components/ArrangedCards/ArrangedCards'
import Navbar from '../../components/Navbar/Navbar'

export default function Events() {
    return (
        <div className="EventLayout">
        <Navbar/>
            <div className="EventLayoutBottom">
                <div className="upcomingEvents">
                    <div className="heading">
                        <h1>Upcoming Events</h1>
                    </div>
                    <ArrangedCards type="own"/>
                </div>
                <hr style={{width: "99%", marginTop:'50px', marginBottom:'50px'}}/>
                <div className="pastEvents">
                    <div className="heading">
                        <h1>Past Events</h1>
                    </div>
                    <ArrangedCards type="own"/>
                </div>
            </div>
        </div>
    )
}