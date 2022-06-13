function convertTime(time) {
  time = time.split(':');
  time = time[0] + ":" + time[1] + " " + time[2].split(' ')[1];
  return time;
}
export const onGroundColumns = [
  // {
  //   field: "_id", headerName: "ID", width: 230, renderCell: (params) => {
  //     return (
  //       <>
  //         {params.row._id}
  //       </>
  //     );
  //   },
  // },
  {
    field: "name",
    headerName: "Event Name",
    width: 150,
    sortable: false,
  },
  {
    field: "typeOfEvent",
    headerName: "Event Type",
    width: 200,
    sortable: false,
  },

  {
    field: "date",
    headerName: "Date",
    width: 120,
    renderCell: (params) => {
      return (
        <>
          {params.row.date.split('T')[0]}
        </>
      );
    },
  },
  {
    field: "StartTime",
    headerName: "Start Time",
    width: 150,
    renderCell: (params) => {

      return (
        <>
          {convertTime(params.row.StartTime)}
        </>
      );
    },
  },
  {
    field: "EndTime",
    headerName: "End Time",
    width: 150,
    renderCell: (params) => {

      return (
        <>
          {convertTime(params.row.EndTime)}
        </>
      );
    },
  },

  {
    field: "noOfVolunteersRequired",
    headerName: "Volunteers Rqd.",
    width: 140,
  },
  {
    field: "volunteers",
    headerName: "Assigned Volunteers",
    width: 140,
    renderCell: (params) => {

      return (
        <>
          {params.row.volunteers ? params.row.volunteers.length : '0'}
        </>
      );
    },
  },

  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 130,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
export const virtualColumns = [
  // {
  //   field: "_id", headerName: "ID", width: 230, renderCell: (params) => {
  //     return (
  //       <>
  //         {params.row._id}
  //       </>
  //     );
  //   },
  // },
  {
    field: "name",
    headerName: "Event Name",
    width: 150,
    sortable: false,
  },
  {
    field: "typeOfEvent",
    headerName: "Event Type",
    width: 200,
    sortable: false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
    renderCell: (params) => {
      return (
        <>
          {params.row.date.split('T')[0]}
        </>
      );
    },
  },
  {
    field: "StartTime",
    headerName: "Start Time",
    width: 150,
    renderCell: (params) => {

      return (
        <>
          {convertTime(params.row.StartTime)}
        </>
      );
    },
  },
  {
    field: "EndTime",
    headerName: "End Time",
    width: 150,
    renderCell: (params) => {

      return (
        <>
          {convertTime(params.row.EndTime)}
        </>
      );
    },
  },
  {
    field: "noOfVolunteersRequired",
    headerName: "Volunteers Rqd.",
    width: 140,
  },
  {
    field: "volunteers",
    headerName: "Assigned Volunteers",
    width: 140,
    renderCell: (params) => {

      return (
        <>
          {params.row.volunteers ? params.row.volunteers.length : '0'}
        </>
      );
    },
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 130,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

