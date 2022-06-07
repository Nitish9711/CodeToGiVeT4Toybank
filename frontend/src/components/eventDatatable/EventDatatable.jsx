import "./EventDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { onGroundColumns, virtualColumns, userRows } from "../../eventDatatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const EventDatatable = ({ type }) => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
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
              <Link to="/onGround/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div className="editButton">
                Edit
              </div>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
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
          On Ground Events
          <Link to="/onGround/new" className="link">
            <Button size="medium" variant="outlined" endIcon={<AddCircleIcon/>}>Add New</Button>
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={onGroundColumns.concat(actionColumn)}
          pageSize={10}
          disableSelectionOnClick
          rowsPerPageOptions={[10]}
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
              <Link to="/virtual/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div className="editButton">
                Edit
              </div>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
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
            <Button size="medium" variant="outlined" endIcon={<AddCircleIcon/>}>Add New</Button>
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={virtualColumns.concat(actionColumn)}
          pageSize={10}
          disableSelectionOnClick
          rowsPerPageOptions={[10]}
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
