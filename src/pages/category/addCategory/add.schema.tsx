import * as Yup from "yup";

export const addSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});
