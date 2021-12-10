import React,{useState,useEffect} from "react";
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



function Detail() {

  const {id} = useParams("");

  const [getuserdata, setUserdata] = useState([]);


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
   useEffect(()=>{
      getdata();
   },[])

   console.log(getuserdata);
 

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.name}</h1>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
        <div className="add_btn">
                <button className="btn btn-primary mx-4">
                  <EditIcon />
                </button>
                <button className="btn btn-danger">
                  <DeleteIcon />
                </button>
              </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img alt="profile" style={{ width: "50px" }} src={profile} />
              <h3 className="mt-3">
                Name: <span style={{ fontWeight: 400 }}>{getuserdata.name}</span>
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
                <span style={{"margin-left":"10px"}}>
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
