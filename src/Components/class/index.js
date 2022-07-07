import React from "react";
import { initialValues } from "./helpers";
import { Formik } from "formik";
import ClassPage from "./classPage";
import axios from "axios";
const Class = () => {
   const handleSubmit = async (values) => {
     const { addClass, classFees } = values;

     const result = await axios.post(
       "http://localhost:4001/api/classes/addclass",
       {
         addClass,
         classFees,
       }
     );

     console.log("flag1");

     const token = result.data.token;

     localStorage.setItem("token", token);

     alert("Class is Created Successfully!");
   };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => {
          return (
            <>
              <ClassPage />
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Class;
