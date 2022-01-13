import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function YouTubeForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name field is required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    channel: Yup.string().required("Required"),
  });
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.channel) {
      errors.channel = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log(formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
            required
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text" 
            id="channel"
            name="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
