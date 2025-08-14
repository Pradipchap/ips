import * as yup from "yup";

export const LOGIN_SCHEMAS = yup.object({
  api_token: yup.string().required("API token is required")
});
