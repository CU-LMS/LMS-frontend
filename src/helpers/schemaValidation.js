import * as yup from "yup";

export const loginSchema = yup.object({
    userEmail: yup.string().email().required(),
    userPassword: yup.string().required(),
  });
  