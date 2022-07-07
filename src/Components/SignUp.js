import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


const SignUp = (props) => {
  const paperStyle = { padding: 20, height: "70vh", margin: 60, width: 350 };
  const btnStyle = { margin: "8px 0" };
  const avatarStyle = { backgroundColor: "#008B8B", margin: 20, padding: 30 };

  const initialValues = {
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    confirmpassword: "",
    term: false,
  };

  const onSubmit = (values, props) => {
    console.log(values); // what we input will be find in there

    localStorage.setItem("values", JSON.stringify({ ...values }));
    values = JSON.parse(localStorage.getItem("values") || "[]");
    // console.log(props);
    //reset form after 2 seconds and submitting
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("Required"),
    term: Yup.string().required("Required"),
  });
  const handleSubmit = async (values) => {
    const { firstname, lastname, email, password, confirmpassword } = values;
    console.log("flag0");
    const result = await axios.post("http://localhost:4001/api/auth/register", {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    });
    console.log("flag1");
        console.log("flag3", result.data);
    const token = result.data.token;

    localStorage.setItem("token", token);

    window.location = "/login";
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper elevation={20} style={paperStyle}>
        <Grid container alignItems="center" justifyContent="center">
          <Avatar style={avatarStyle}></Avatar>
        </Grid>
        <h2>Create New Account</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="FirstName"
                name="firstname"
                type="firstname"
                helperText={<ErrorMessage name="firstname" />}
              />
              <Field
                as={TextField}
                label="LastName"
                name="lastname"
                type="lastname"
                helperText={<ErrorMessage name="lastname" />}
              />
              <Field
                as={TextField}
                label="Email"
                name="email"
                type="email"
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                label="Confirm Password"
                name="confirmpassword"
                type="confirmpassword"
                helperText={<ErrorMessage name="confirmpassword" />}
              />
              <br></br>
              <br></br>
              <Field
                as={FormControlLabel}
                name="term"
                helperText={<ErrorMessage name="confirmpassword" />}
                style={{ marginLeft: "-15px" }}
                control={<Checkbox color="primary" size="small" required />}
                label="I accept the term and conditions."
              />
              <Button
                variant="contained"
                type="primary"
                color="primary"
                value="submit"
                style={btnStyle}
                disabled={props.isSubmitting}
                fullWidth
              >
                {" "}
                {props.isSubmitting ? "Loading" : "SignUp"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <p>
            {" "}
            Do you have an account?
            <Link href="/login">&nbsp;Login</Link>
          </p>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
