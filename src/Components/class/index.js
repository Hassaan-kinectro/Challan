import React from "react";
import { initialValues } from "./helpers";
import { Formik } from "formik";
import ClassPage from "./classPage";
import instance from "../../config/axios";
import { useDispatch } from "react-redux";
import ClassNameAction from "../../Redux/actions";
const Class = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const { addClass, classFees } = values;
    console.log(values);
    const result = await instance.post("/api/classes/addclass", {
      addClass,
      classFees,
    });

    const GetAllClasses = await instance.get("/api/classes/getallclasses");

    dispatch( ClassNameAction({ type: "class_Name", payload: GetAllClasses.data.data }));

    console.log(result);
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
