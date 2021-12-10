import React, { useState, useEffect } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
function Home() {
  const [getuserdata, setUserdata] = useState([]);

  const getdata = async (e) => {
   // e.preventDefault();

    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      setUserdata(data);
      console.log("get added");
    }
  };

    var count=1;
  useEffect(() => {
    getdata();
    count=1;
  }, []);

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <Link to="/register">
            <button className="btn btn-primary">Add data</button>
          </Link>
        </div>

        <table class="table  mt-4">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
        {   getuserdata.map((user)=>{
          return  <tr>
              <th scope="row">{count++}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.work}</td>
              <td>{user.mobile}</td>
              <td className="d-flex justify-content-between">
                <NavLink to={`view/${user._id}`}><button className="btn btn-success">
                  <RemoveRedEyeIcon />
                </button></NavLink>
                <button className="btn btn-primary">
                  <EditIcon />
                </button>
                <button className="btn btn-danger">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
        }) }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
