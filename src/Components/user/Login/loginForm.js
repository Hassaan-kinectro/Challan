import React from "react";

import { TextField } from "@mui/material";
import {
  Avatar,
  Grid,
  Paper,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { Form, Field, ErrorMessage } from "formik";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const LoginForm = (props) => {
  const paperStyle = { padding: 20, height: "70vh", width: 350 };
  const btnStyle = { margin: "8px 0" };
  const avatarStyle = { backgroundColor: "#008B8B", margin: 30, padding: 30 };
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", borderRadius:"3px" }}
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid container alignItems="center" justifyContent="center">
          <Avatar style={avatarStyle}></Avatar>
        </Grid>
        <h2>Welcome Back</h2>

        <Form>
          {/* {console.log(props)} */}
          <Field
            style={{ padding: "4px" }}
            as={TextField}
            label="Email"
            name="email"
            type="email"
            required
            helperText={<ErrorMessage name="email" />}
          />
          <Field
            style={{ padding: "4px" }}
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
        <Typography>
          <Link href="/">
            <p>Forget Password</p>
          </Link>
        </Typography>
        <Typography>
          <p>
            {" "}
            Don't you have an account?
            <Link href="/">&nbsp;Sign Up</Link>
          </p>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
