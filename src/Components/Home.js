import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: "250px"
  },
  btns: {
    "& > *": {
      margin: theme.spacing(5),
    },
    marginTop: "40px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Typography variant="h4" component="h4">
          Welcome to the Dashboard
        </Typography>
        <div className={classes.btns}>
          <Button variant="outlined" href="/Create-Class">
            Create Class
          </Button>
          <Button variant="outlined" href="/Create-Students">
            Add Student
          </Button>
          <Button variant="outlined" href="/Create-Challan">
            Create Challan
          </Button>
          <Button variant="outlined" color="secondary" href="/display-challan">
            Display Challans
          </Button>
          <Button variant="outlined" color="secondary" href="/update-challan">
            Set Status Of Student Challan
          </Button>

        </div>
      </div>
    </div>
  );
};
export default Home;
