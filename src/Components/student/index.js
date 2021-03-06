import React from "react";
import { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { initialValues } from "./helpers";
import instance from "../../config/axios";
import Header from "../dashboard/header";
import SetClass from "./setClass";
import SelectMode1 from "./setMode";
import { Link } from "react-router-dom";

const Students = (props) => {
 
  const [className, setClassName] = useState();
  const [mode, setMode] = useState();

  const alertFun = (data) => {
    setClassName(data);
    // console.log("data:", data);
  };

  const alertFun2 = (data) => {
    setMode(data);
    // console.log("data:", data);
  };

  const paperStyle = {
    padding: 30,
    height: "55vh",
    margin: 30,
    width: 550,
    minHeight: 100,
  };
  const btnStyle = { margin: "8px 0" };

 
// //   const onSubmit = (values, props) => {
// //     console.log(values);

//     // console.log(props);
//     //reset form after 2 seconds and submitting
//     setTimeout(() => {
//       props.resetForm();
//       props.setSubmitting(false);
//     }, 2000);
//   };

  const handleSubmit = async (values) => {
    const { firstName, lastName } = values;
    console.log(values, className, mode);
    const result = await instance.post(
      "/api/students/addstudent",
      {
        firstName,
        lastName,
        className,
        mode,
      }
    );


    console.log("flag1");

    const token = result.data.token;

    localStorage.setItem("token", token);

    alert("student is added to the class!");
  };

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
          <h2>Add Students</h2>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  variant="outlined"
                  label="First Name"
                  name="firstName"
                  type="Name"
                  autoComplete="off"
                  helperText={<ErrorMessage name="firstName" />}
                  required
                />
                <br></br>
                <Field
                  as={TextField}
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  type="Name"
                  autoComplete="off"
                  helperText={<ErrorMessage name="lastName" />}
                  required
                />
                <br></br>

                <SetClass name={alertFun} />
                <SelectMode1 name={alertFun2} />

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
                <Link to="/home" style={{textDecoration:"none"}}>
                  <Button variant="outlined" color="primary" fullWidth>
                    Go Back
                  </Button>
                </Link>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
};

export default Students;
