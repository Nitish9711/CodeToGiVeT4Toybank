import './CardLayout.css'
import Button from '@mui/material/Button';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrangedCards from '../ArrangedCards/ArrangedCards';
import { NavLink } from "react-router-dom";

export default function CardLayout() {

  return (
    <div className="cardLayoutContainer" >
      <div className="LayoutTop">
        <div className="Toptitle">Events</div>
        <div className="Topbtn">
          <NavLink to="/volunteer" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="error" size="large" endIcon={<VolunteerActivismIcon />}>
              Volunteer
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="LayoutBottom">
        <ArrangedCards />
      </div>
    </div>
  )
}
