import React, { useState, useEffect,useContext } from "react";
import Card from "@mui/material/Card";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import CardContent from "@mui/material/CardContent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import profile from "../img/account.png";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import {deldata} from './context/ContextProvider';


function Detail() {
  const [getuserdata, setUserdata] = useState([]);
  const {dltdata,setDLTdata} = useContext(deldata);

  const { id } = useParams("");


  const navigate  = useNavigate();


  const getdata = async (e) => {
    // e.preventDefault();

    const res = await fetch(`/getuser/${id}`, {
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
  useEffect(() => {
    getdata();
  }, []);

  
  const deleteuser =async(id)=>{
    const res2 = await fetch(`/deleteuser/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':"application/json"
      }
    });
    const deletedata = await res2.json();
    console.log(deletedata);

    if(res2.status===422 || !deletedata){
      console.log("error");
    }else{
      console.log("user deleted");
      setDLTdata(deletedata);
      navigate("/");
    }
  }



  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.name}</h1>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <NavLink to={`/edit/${getuserdata._id}`}>
              
              <button className="btn btn-primary mx-4">
                <EditIcon />
              </button>
            </NavLink>
            <button className="btn btn-danger" onClick={()=>deleteuser(getuserdata._id)}>
              <DeleteIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img alt="profile" style={{ width: "50px" }} src={profile} />
              <h3 className="mt-3">
                Name:
                <span style={{ fontWeight: 400 }}>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Age: <span style={{ fontWeight: 400 }}>{getuserdata.age}</span>
              </h3>
              <p className="mt-3">
                <MailIcon />
                Email: <span>{getuserdata.email}</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occupation: <span>{getuserdata.work}</span>
              </p>
            </div>
            <div className="right_view  col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                <MobileFriendlyIcon /> mobile: <span>{getuserdata.mobile}</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon /> location: <span>{getuserdata.add}</span>
              </p>
              <p className="mt-3">
                description:
                <span style={{ "margin-left": "10px" }}>
                  {getuserdata.desc}
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Detail;
