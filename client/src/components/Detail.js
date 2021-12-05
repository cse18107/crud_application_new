import React from "react";
import Card from "@mui/material/Card";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import CardContent from "@mui/material/CardContent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import profile from "../img/account.png";
function Detail() {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Soumodeep Maity</h1>

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
                Name: <span style={{ fontWeight: 400 }}>Soumodeep Maity</span>
              </h3>
              <h3 className="mt-3">
                Age: <span style={{ fontWeight: 400 }}>23</span>
              </h3>
              <p className="mt-3">
                <MailIcon />
                Email: <span>Saikat@gmail.com</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occupation: <span>Web Debeloper</span>
              </p>
            </div>
            <div className="right_view  col-lg-6 col-md-6 col-12">
              

              <p className="mt-5">
                <MobileFriendlyIcon /> mobile: <span>91 8240500249</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon /> location: <span>Dakhineswar</span>
              </p>
              <p className="mt-3">
                description:
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
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
