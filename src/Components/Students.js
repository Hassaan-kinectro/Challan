import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "./Header";
const Students = (props) => {
  const paperStyle = { padding: 45, height: "40vh", margin: 30, width: 550 };
  const btnStyle = { margin: "8px 0" };

  const initialValues = {
    firstName: "",
    lastName: "",
    className: "",
    mode: "",
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
    const { firstName, lastName, className, mode } = values;
    const result = await axios.post(
      "http://localhost:4001/add-student",
      {
        firstName,
        lastName,
        className,
        mode,
      }
    );

    console.log("flag1");
    // console.log("flag3", result.data);
    const token = result.data.token;

    localStorage.setItem("token", token);

    //   <Redirect to="/dashboard" />;
    // window.location = "/Create-Students";
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
          <h2>Add Students to the Class</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            // validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="firstName"
                  name="firstName"
                  type="Name"
                  helperText={<ErrorMessage name="firstName" />}
                  fullWidth
                />
                <Field
                  as={TextField}
                  label="lastName"
                  name="lastName"
                  type="Name"
                  helperText={<ErrorMessage name="lastName" />}
                  fullWidth
                />
                <Field
                  as={TextField}
                  label="className"
                  name="className"
                  type="Name"
                  helperText={<ErrorMessage name="className" />}
                  fullWidth
                />
                <Field
                  as={TextField}
                  label="mode (either 1 or 2 or 4)"
                  name="mode"
                  type="Name"
                  helperText={<ErrorMessage name="mode" />}
                  fullWidth
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
