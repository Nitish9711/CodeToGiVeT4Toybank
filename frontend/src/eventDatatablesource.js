export const onGroundColumns = [
  { field: "id", headerName: "ID", width: 130 },
  {
    field: "event",
    headerName: "Event Name",
    width: 240,
    sortable: false,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.eventName}
        </div>
      );
    },
  },

  {
    field: "town",
    headerName: "Town",
    width: 120,
    sortable:false,
  },
  {
    field: "district",
    headerName: "District",
    width: 120,
    sortable:false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  {
    field: "time",
    headerName: "Time",
    width: 180,
  },
  {
    field: "noOfVolunteers",
    headerName: "Volunteers Rqd.",
    width: 140,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const virtualColumns = [
  { field: "id", headerName: "ID", width: 130 },
  {
    field: "event",
    headerName: "Event Name",
    width: 240,
    sortable: false,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.eventName}
        </div>
      );
    },
  },

  {
    field: "link",
    headerName: "Link (if any)",
    width: 200,
    sortable:false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  {
    field: "time",
    headerName: "Time",
    width: 180,
  },
  {
    field: "noOfVolunteers",
    headerName: "Volunteers Required",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    eventName: "Random Event 1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    town: "New Delhi",
    district: "Northern",
    date: "06 June 2022",
    time: "17:38:58 GMT+0530",
    noOfVolunteers: 5,
  },
  
];
