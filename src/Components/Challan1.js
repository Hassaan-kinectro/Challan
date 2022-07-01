import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "./Header";
import { useState } from "react";
import GenerateChallanClass from "./GenerateChallanClass";
import SelectMode from "./SelectMode";

const Challan1 = (props) => {

   const [className, setClassName] = useState();
   const [isChallanGenerated, setIsChallanGenerated] = useState();


    const getClassName = (data) => {
      setClassName(data);
    };

    const generateHandler = async () => {
      //generate challans
      const result = await axios.post(
"http://localhost:4000/generate-challan",
        {
          className,
        }
      );
      // console.log(result.data.length);
      if (result.data.length === 0) {
        window.location = "/NotFound";
      }
      if (result.data) {
        setIsChallanGenerated(true);
      }
    };
  const paperStyle = { padding: 45, height: "40vh", margin: 30, width: 550 };
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
  // const validationSchema = Yup.object().shape({
  //   firstName: Yup.string().required("Required"),
  //   lastName: Yup.string().required("Required"),
  //   className: Yup.string().required("Required")
  // });
  const handleSubmit = async (values) => {
    const { className } = values;
    const result = await axios.post("http://localhost:4001/generate-challan", {
      className,
    });
    console.log(values)
    // console.log(result.data.length);
    if (result.data.length === 0) {
      window.location = "/no-data-found";
    }
    if (result.data) {
      setIsChallanGenerated(true);
    }
    console.log("flag1");
    // console.log("flag3", result.data);
    const token = result.data.token;

    localStorage.setItem("token", token);

    //   <Redirect to="/dashboard" />;
    // window.location = "/Create-Students";
    alert("challan generated for class of students!");
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
          <GenerateChallanClass className={getClassName} fullWidth />
          <SelectMode fullWidth />
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            // validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <div>
                  {isChallanGenerated && (
                    <p style={{ marginTop: "-1rem", color: "green" }}>
                      Challans has been generated successfully
                    </p>
                  )}
                </div>
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

export default Challan1;
