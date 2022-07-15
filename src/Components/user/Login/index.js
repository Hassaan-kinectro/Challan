import React from "react";
import { LogininitialValues, LoginvalidationSchema } from "./helpers";
import { Formik } from "formik";
import LoginForm from "./loginForm";
import instance from "../../../config/axios";

const Login = (props) => {
  const handleSubmit = async (values) => {
    const { email, password } = values;
    console.log("flag0");
    const result = await instance.post(
      "/api/auth/login",
      {
        email,
        password,
      }
    );
console.log(values);
    console.log("flag1");
    console.log("flag3", result.data);
    const token = result.data.token;

    localStorage.setItem("token", token);

    //   <Redirect to="/dashboard" />;
    console.log("flag");
     window.location = "/home";
  };
  return (
    <div>
      <Formik
        initialValues={LogininitialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginvalidationSchema}
      >
        {(props) => {
          return (
            <>
              <LoginForm/>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
