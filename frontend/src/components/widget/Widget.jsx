import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EventIcon from '@mui/icons-material/Event';
import DevicesIcon from '@mui/icons-material/Devices';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';


const Widget = ({ type }) => {
  let data;
  
  //temporary
  const [countOnGroundEvents, setOnGroundEventsCount] = useState([]);
  const [countVirtualEvents, setVirtualEventsCount] = useState([]);
  const [countVolunteers, setcountVolunteers] = useState([]);
  
  async function getAllOnGroundEvents() {
    try {
      const response = await axios.get(`/onGroundEvents/getAll`, { withCredentials: true });
      // console.log("response: ", response);
      console.log(response.data);

      setOnGroundEventsCount(response.data.length);
    } catch (error) {
      console.log(error);
    }
  }
  async function getAllVirtualEvents() {
    try {
      const response = await axios.get(`/virtualEvents/getAll`, { withCredentials: true });
      // console.log(response.data);
      setVirtualEventsCount(response.data.length);
    } catch (error) {
      console.log(error);
    }
  }
  async function getAllVolunteers() {
    try {
      const response = await axios.get(`/volunteers/getAll`, { withCredentials: true });
      // console.log(response.data);
      setcountVolunteers(response.data.length);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllOnGroundEvents();
    getAllVirtualEvents();
    getAllVolunteers();
  }, []);
 
  
  switch (type) {
    case "OnGround":
      data = {
        title: "Onground Events",
        count: countOnGroundEvents,
        isMoney: false,
        link: "See all Onground Events",
        icon: (
          <EventIcon
            className="icon"
            style={{
              color: "crimson",
              fontSize: 20,
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "Virtual":
      data = {
        title: "Virtual Events",
        count: countVirtualEvents,
        isMoney: false,
        link: "See all Virtual Events",
        icon: (
          <DevicesIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "Volunteers":
      data = {
        title: "Volunteers",
        count: countVolunteers,
        isMoney: false,
        link: "See all Volunteers",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    // case "earning":
    //   data = {
    //     title: "EARNINGS",
    //     isMoney: true,
    //     link: "View net earnings",
    //     icon: (
    //       <MonetizationOnOutlinedIcon
    //         className="icon"
    //         style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
    //       />
    //     ),
    //   };
    //   break;
    // case "balance":
    //   data = {
    //     title: "BALANCE",
    //     isMoney: true,
    //     link: "See details",
    //     icon: (
    //       <AccountBalanceWalletOutlinedIcon
    //         className="icon"
    //         style={{
    //           backgroundColor: "rgba(128, 0, 128, 0.2)",
    //           color: "purple",
    //         }}
    //       />
    //     ),
    //   };
    //   break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.count}
        </span>
        {data.title === "Onground Events" &&
        <NavLink to="/onGround" style={{ textDecoration: "none" }}>
          <span className="link" style={{ cursor: "pointer" }}>{data.link}</span>
        </NavLink>
        }
        {data.title === "Volunteers" &&
        <NavLink to="/volunteers" style={{ textDecoration: "none" }}>
          <span className="link" style={{ cursor: "pointer" }}>{data.link}</span>
        </NavLink>
        }
        {data.title === "Virtual Events" &&
        <NavLink to="/virtual" style={{ textDecoration: "none" }}>
          <span className="link" style={{ cursor: "pointer" }}>{data.link}</span>
        </NavLink>
        }
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
