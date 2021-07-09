import "./userList.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { userRows } from "../../DummyData";
import { DataGrid } from "@material-ui/data-grid";

export default function Userlist() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // handleDelete = (counterId) => {
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters });
  // };

  const userColumns = [
    { field: "id", headerName: "ID", width: 140 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.user}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "date", headerName: "Date In", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button className="btn btn-secondary btn-sm m-2 userListEdit">
                Edit
              </button>
            </Link>
            <button
              className="btn btn-danger btn-sm  userListDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={userColumns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
