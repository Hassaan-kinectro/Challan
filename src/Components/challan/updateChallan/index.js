import React from "react";
import { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { initialValues } from "./helpers";
import instance from "../../../config/axios";
import Header from "../../dashboard/header";
import { Link } from "react-router-dom";
import StudentStatus from "./updateStatus";


const UpdateChallanData = (props) => {
  const [status, setStatus] = useState();
  const alertFun3 = (data) => {
    setStatus(data);
    console.log("data:", data);
  };
  const paperStyle = {
    padding: 30,
    height: "55vh",
    margin: 30,
    width: 550,
    minHeight: 100,
  };
  const btnStyle = { margin: "8px 0" };

  //   const onSubmit = (values, props) => {
  //     console.log(values);

  //     // console.log(props);
  //     //reset form after 2 seconds and submitting
  //     setTimeout(() => {
  //       props.resetForm();
  //       props.setSubmitting(false);
  //     }, 2000);
  //   };

  const handleSubmit = async (values) => {
    const { challanId } = values;
    const result = await instance.post("/api/challans/updatestatus", {
      challanId,
      status
    });

    console.log("flag1", result);

    const token = result.data.token;

    localStorage.setItem("token", token);

    alert("Challan Status Added Successdully!");
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
          <h2>Update Student Status & Fees </h2>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Challan ID"
                  variant="outlined"
                  name="challanId"
                  type="challanId"
                  autoComplete="off"
                  helperText={<ErrorMessage name="challanId" />}
                />
              
                <br></br>
            

                <StudentStatus name={alertFun3} />
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
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
};

export default UpdateChallanData;
