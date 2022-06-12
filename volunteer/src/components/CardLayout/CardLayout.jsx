import './CardLayout.css'
import Button from '@mui/material/Button';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Grid from '@mui/material/Grid';
import Cards from '../Cards/Cards'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CardLayout() {
  const [onGround, setOnGround] = useState([]);
  const [virtual, setVirtual] = useState([]);
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get(`/util/sendEvents`, { withCredentials: true });
        console.log("Response: ", response.data);
        setOnGround(response.data.onGround);
        setVirtual(response.data.virtualEvent);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();

    // return () => {
    //   second
    // }
  }, [])

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
        <div className="ArrangedCardsContainer" style={{ width: "95%" }}>
          <Grid
            container
            spacing={3}
            sx={{
              paddingLeft: "50px",
            }}
            justifyContent="center">
            {
              onGround.map(event =>
              (
                <Grid item xs={12} sm={6} md={4} key={event._id}>
                  <Cards type="random" data={event} category="On Ground Event" />
                </Grid>
              )
              )
            }
            {
              virtual.map(event =>
              (
                <Grid item xs={12} sm={6} md={4} key={event._id}>
                  <Cards type="random" data={event} category="Virtual Event" />
                </Grid>
              )
              )
            }
          </Grid>
        </div>
      </div>
    </div>
  )
}
