import './EventDetails.scss';
import Navbar from '../../components/Navbar/Navbar';

import SingleOnGround from './SingleOnGround';
import SingleVirtual from './SingleVirtual';;

export default function EventDetails({ type }) {
    
    return (
        <div className="eventDetailsContainer">
            <Navbar />
            <div className="detailsTopSection">

                {type === 'onGround' ?
                    <SingleOnGround />
                    :
                    <SingleVirtual />
                }

            </div>
        </div>
    )
}
