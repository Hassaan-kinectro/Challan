import React from "react";
import { Formik } from "formik";
import SignUpForm from "./signUpForm";
import instance from "../../../config/axios";
import { initialValues, validationSchema } from "./helpers";
const SignUp = (props) => {
  const handleSubmit = async (values) => {
    const { firstname, lastname, email, password, confirmpassword } = values;
    console.log("flag0");
    const result = await instance.post("/api/auth/register", {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    });
    console.log(result);
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
