import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import SignUp from "./SignUp";
const Login = (props) => {
  const paperStyle = { padding: 20, height: "70vh", width: 350 };
  const btnStyle = { margin: "8px 0" };
  const avatarStyle = { backgroundColor: "#008B8B",margin:30, padding:30 };
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };
  const onSubmit = (values, props) => {
    console.log(values); // what we input will be find in there
    // console.log(props);
    //reset form after 2 seconds and submitting
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    const { email, password } = values;
    console.log("flag0");
    const result = await axios.post("http://localhost:4001/login", {
      email,
      password
    });
    
    console.log("flag1");
    console.log("flag3", result.data);
    const token = result.data.token;
    
    localStorage.setItem("token", token);

    //   <Redirect to="/dashboard" />;
    console.log("flag");
    window.location = "/home";
  };
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid container alignItems="center" justifyContent="center">
          <Avatar style={avatarStyle}></Avatar>
        </Grid>
        <h2>Welcome Back</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {/* {console.log(props)} */}
              <Field
                as={TextField}
                label="Email"
                name="email"
                type="email"
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                required
                helperText={<ErrorMessage name="password" />}
              />
              <br></br>
              <p></p>
              <Field
                as={FormControlLabel}
                name="remember"
                style={{ marginLeft: "-65px" }}
                control={<Checkbox color="primary" size="small" />}
                label="Remember me"
              />
              <Button
                variant="contained"
                type="primary"
                color="primary"
                style={btnStyle}
                disabled={props.isSubmitting}
                fullWidth
              >
                {" "}
                {props.isSubmitting ? "Loading" : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="/">
            <p>Forget Password</p>
          </Link>
        </Typography>
        <Typography>
          <p >
            {" "}
            Don't you have an account?
            <Link href="/">&nbsp;Sign Up</Link>
          </p>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
