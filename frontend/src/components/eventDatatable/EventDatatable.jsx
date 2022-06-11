import "./EventDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { onGroundColumns, virtualColumns } from "../../eventDatatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';

const EventDatatable = ({ type }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getAllOnGroundEvents() {
      try {
        const response = await axios.get(`/onGroundEvents/getAll`, { withCredentials: true });
        console.log("response: ", response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    async function getAllVirtualEvents() {
      try {
        const response = await axios.get(`/virtualEvents/getAll`, { withCredentials: true });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    type === 'onGroundEvent' ? getAllOnGroundEvents() : getAllVirtualEvents();
    // return () => {
    //   second
    // }
  }, [type])


  const handleDelete = (id) => {
    async function deleteOnGroundEvents() {
      try {
        const response = await axios.post(`/onGroundEvents/delete/${id}`, { withCredentials: true });
        console.log("response: ", response);
        setData(data.filter((item) => item._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
    async function deleteVirtualEvents() {
      try {
        const response = await axios.post(`/virtualEvents/delete/${id}`, { withCredentials: true });
        console.log("response: ", response);
        setData(data.filter((item) => item._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
    type === 'onGroundEvent' ? deleteOnGroundEvents() : deleteVirtualEvents();
    // return () => {
    //   second
    // }
  };

  const OnGroundEventDatatable = () => {
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 180,
        sortable: false,
        filterable: false,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to={`/onGround/${params.row._id}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div className="editButton">
                Edit
              </div>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row._id)}
              >
                Delete
              </div>
            </div >
          );
        },
      },
    ];
    return (
      <div className="datatable">
        <div className="datatableTitle">
          On Ground Events
          <Link to="/onGround/new" className="link">
            <Button size="medium" variant="outlined" endIcon={<AddCircleIcon />}>Add New</Button>
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={onGroundColumns.concat(actionColumn)}
          pageSize={10}
          disableSelectionOnClick
          rowsPerPageOptions={[10]}
          getRowId={(row) => row._id}
        />
      </div>
    );
  };

  const VirtualEventDatatable = () => {
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 180,
        sortable: false,
        filterable: false,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to={`/virtual/${params.row._id}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div className="editButton">
                Edit
              </div>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row._id)}
              >
                Delete
              </div>
            </div>
          );
        },
      },
    ];
    return (
      <div className="datatable">
        <div className="datatableTitle">
          Virtual Events
          <Link to="/virtual/new" className="link">
            <Button size="medium" variant="outlined" endIcon={<AddCircleIcon />}>Add New</Button>
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={virtualColumns.concat(actionColumn)}
          pageSize={10}
          disableSelectionOnClick
          rowsPerPageOptions={[10]}
          getRowId={(row) => row._id}
        />
      </div>
    );
  };

  return (
    <>
      {
        type === "onGroundEvent" ? <OnGroundEventDatatable /> : <VirtualEventDatatable />
      }
    </>
  )
};

export default EventDatatable;
