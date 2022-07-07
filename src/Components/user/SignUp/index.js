import React from "react";
import { Formik } from "formik";
import SignUpForm from "./signUpForm";
import axios from "axios";
import { initialValues, validationSchema } from "./helpers";
const SignUp = (props) => {
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
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <>
              <SignUpForm />
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUp;
