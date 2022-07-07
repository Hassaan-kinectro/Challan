import * as Yup from "yup";

export const initialValues = {
  firstname: "",
  lastname: "",
  password: "",
  email: "",
  confirmpassword: "",
  term: false,
};

export const validationSchema = Yup.object().shape({
  //   firstname: Yup.string()
  //   .required("Required"),
  //   lastname: Yup.string()
  //   .required("Required"),
  email: Yup.string().email("please enter valid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "password must match"
  ),
});
