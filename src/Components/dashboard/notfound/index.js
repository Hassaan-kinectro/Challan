import React from "react";
import error from "../../../assets/img/error.png";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid>
        <img
          src={error}
          alt="notfound"
          style={{ height: "50vh", paddingTop: "100px" }}
        ></img>
      </Grid>
      <div>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="primary" style={{marginTop:"50px"}}>
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
