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
import { Form, Field, ErrorMessage } from "formik";

const SignUpForm = (props) => {
  const paperStyle = { padding: 20, height: "75vh", margin: 60, width: 350 };
  const btnStyle = { margin: "8px 0" };
  const avatarStyle = { backgroundColor: "#008B8B", margin: 20, padding: 30 };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", borderRadius: "3px" }}
    >
      <Paper elevation={20} style={paperStyle}>
        <Grid container alignItems="center" justifyContent="center">
          <Avatar style={avatarStyle}></Avatar>
        </Grid>
        <h2>Create New Account</h2>
        <Form>
          <Field
            style={{ padding: "4px" }}
            as={TextField}
            label="FirstName"
            variant="outlined"
            name="firstname"
            type="firstname"
            helperText={<ErrorMessage name="firstname" />}
          />
          <Field
            style={{ padding: "4px" }}
            as={TextField}
            variant="outlined"
            label="LastName"
            name="lastname"
            type="lastname"
            helperText={<ErrorMessage name="lastname" />}
          />
          <Field
            style={{ padding: "4px" }}
            as={TextField}
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            helperText={<ErrorMessage name="email" />}
          />
          <Field
            style={{ padding: "4px" }}
            as={TextField}
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            helperText={<ErrorMessage name="password" />}
          />
          <Field
            style={{ padding: "4px" }}
            as={TextField}
            label="Confirm Password"
            variant="outlined"
            name="confirmpassword"
            type="password"
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

export default SignUpForm;
