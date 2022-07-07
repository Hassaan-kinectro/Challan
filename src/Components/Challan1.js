import React from "react";
import { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
// import { TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
// import * as Yup from "yup";
import axios from "axios";
import Header from "./Header";
import GenerateChallanClass from "./GenerateChallanClass";

const Students = (props) => {
  const [className, setClassName] = useState();

  const alertFun = (data) => {
    setClassName(data);
    console.log("data:", data);
  };

   const getClassName = (data) => {
     setClassName(data.data);
   };

  const paperStyle = { padding: 45, height: "45vh", margin: 30, width: 550 };
  const btnStyle = { margin: "8px 0" };

  const initialValues = {
    className: "",
  };

  const onSubmit = (values, props) => {
    console.log(values);

    // console.log(props);
    //reset form after 2 seconds and submitting
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const handleSubmit = async (values) => {
    // const { className } = values;
    console.log(values);
    const result = await axios.post(
      "http://localhost:4001/api/challans/generatechallan",
      {
        className,
      }
    );

    console.log("flag1", result);

    const token = result.data.token;

    localStorage.setItem("token", token);

 
    alert("Challan Generated Successfully!");
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
          <h2>Generate Challan</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
           
          >
            {(props) => (
              <Form>
                
                <br></br>

                <GenerateChallanClass name={alertFun} />
    
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
                  {props.isSubmitting ? "Loading" : "Generate"}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href="/home"
                  fullWidth
                >
                  Go Back
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
};

export default Students;
