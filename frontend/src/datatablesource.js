export const volunteerColumns = [
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
    headerName: "Volunteer Name",
    width: 300,
    sortable: false,
  },
  {
    field: "username",
    headerName: "Username",
    width: 300,
    sortable: false,
  },

  {
    field: "age",
    headerName: "Age",
    width: 150,
  },
  {
    field: "email",
    headerName: "E-mail ID",
    width: 300,
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
