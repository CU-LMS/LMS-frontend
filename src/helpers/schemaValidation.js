import * as yup from "yup";

export const loginSchema = yup.object({
  userEmail: yup.string().email().required(),
  userPassword: yup
    .string()
    .min(8, "password must be atleast 8 characters ")
    .max(15, "password must not exceed 15 characters")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Missing uppercase, lowercase letter, one digit, and one special character."
    )
    .required("Password is must"),
  Name: yup.string().required(),
  Email: yup.string().email().required(),
});
