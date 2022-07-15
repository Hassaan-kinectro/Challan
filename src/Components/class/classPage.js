import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Form, Field, ErrorMessage } from "formik";
import Header from "../dashboard/header";
const ClassPage = (props) => {
  
  const paperStyle = { padding: 45, height: "40vh", margin: 30, width: 550 };
  const btnStyle = { margin: "8px 0" };

  return (
    <div>
      <Header />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Paper elevation={20} style={paperStyle}>
          <h2>Create Class</h2>

          <Form>
            <Field
              as={TextField}
              label="Class Name"
              variant="outlined"
              name="addClass"
              type="Name"
              autoComplete="off"
              helperText={<ErrorMessage name="addClass" />}
              fullWidth
              required
              
            />
            <Field
              as={TextField}
              variant="outlined"
              label="Class Fees"
              name="classFees"
              type="Name"
              autoComplete="off"
              helperText={<ErrorMessage name="classFees" />}
              fullWidth
              required
            />

            <br></br>
            <br></br>

            <Button
              variant="contained"
              type="primary"
              color="primary"
              style={btnStyle}
              disabled={props.isSubmitting}
              fullWidth
            >
              {" "}
              {props.isSubmitting ? "Loading" : "Save"}
            </Button>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary" fullWidth>
                Go Back
              </Button>
            </Link>
          </Form>
        </Paper>
      </Grid>
    </div>
  );
};

export default ClassPage;
