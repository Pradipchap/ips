import * as yup from "yup";

export const LOGIN_SCHEMAS = yup.object({
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  rememberMe: yup.boolean().default(false)
});
