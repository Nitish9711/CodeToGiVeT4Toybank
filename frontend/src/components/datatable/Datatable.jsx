import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { volunteerColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllVolunteers() {
      try {
        const response = await axios.get(`/volunteers/getAll`, { withCredentials: true });
        console.log("response: ", response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllVolunteers();
  }, [])

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`/volunteers/delete/${id}`, { withCredentials: true });
      console.log("response: ", response);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/volunteers/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            {/* <div className="editButton">
              Edit
            </div> */}
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Volunteers
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={volunteerColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
