import * as Yup from "yup";

export const LogininitialValues = {
  email: "",
  password: "",
  remember: false,
};
export const LoginvalidationSchema = Yup.object().shape({
  email: Yup.string().email("please enter valid email").required("Required"),
  password: Yup.string().required("Required"),
});
