import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: "300px",
  },
  btns: {
    "& > *": {
      margin: theme.spacing(4),
    },
    marginTop: "50px",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h4" component="h4">
          Create Monthly Fees Challans of Students.
        </Typography>
        <div className={classes.btns}>
          <Link to="/create-class" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Create Class</Button>
          </Link>
          <Link to="/add-student" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Add Student</Button>
          </Link>
          <Link to="/create-challan" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Create Challan</Button>
          </Link>
          <Link to="/display-challan" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Display Challans
            </Button>
          </Link>
          <Link to="/update-challan" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Set Status Of Student Challan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
