export const onGroundColumns = [
  {
    field: "_id", headerName: "ID", width: 230, renderCell: (params) => {
      return (
        <>
          {params.row._id}
        </>
      );
    },
  },
  {
    field: "name",
    headerName: "Event Name",
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
  },
  {
    field: "EndTime",
    headerName: "End Time",
    width: 150,
  },
  {
    field: "noOfVolunteersRequired",
    headerName: "Volunteers Rqd.",
    width: 140,
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
  {
    field: "_id", headerName: "ID", width: 230, renderCell: (params) => {
      return (
        <>
          {params.row._id}
        </>
      );
    },
  },
  {
    field: "name",
    headerName: "Event Name",
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
  },
  {
    field: "EndTime",
    headerName: "End Time",
    width: 150,
  },
  {
    field: "noOfVolunteersRequired",
    headerName: "Volunteers Rqd.",
    width: 140,
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

