import { Field, Form, Formik, useFormik } from "formik";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Icons from "../atoms/Icons";

const Forms = ({ data }) => {
  const [isHuman, setIsHuman] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const apiKey = process.env.REACT_APP_SITE_KEY;
  const textarea = ["message"];

  const formik = useFormik({
    initialValues: data.initialValues,
    onSubmit: (values) => {
      console.log("values", values);
      // if (isHuman) {
      //   setIsRequired(false);
      //   data.handleSubmit(values);
      // } else setIsRequired(true);
    },
    validationSchema: data.schema,
  });

  // const handleLoaded = () => {
  //   window.grecaptcha.ready(() => {
  //     window.grecaptcha
  //       .execute(apiKey, { action: "homepage" })
  //       .then((token) => {
  //         setIsHuman(token);
  //       });
  //   });
  // };
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = `https://www.google.com/recaptcha/api.js?render=${apiKey}`;
  //   script.addEventListener("load", handleLoaded);
  //   document.body.appendChild(script);
  // }, []);

  // {({ errors, handleSubmit, handleChange }) => (
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.keys(data.initialValues).map((value) => (
        <div key={value}>
          <div>
            <label htmlFor={value}>
              {value.charAt(0).toUpperCase() + value.slice(1)}{" "}
              {formik.errors[value] && (
                <span className="required">{formik.errors[value]}</span>
              )}
            </label>
          </div>
          {textarea.includes(value) ? (
            <input type="textarea" name={value} component="textarea" />
          ) : (
            <input type="text" name={value} />
          )}
        </div>
      ))}
      <div className="form-submit">
        {isRequired && <span className="required">*Recaptcha is required</span>}
        <ReCAPTCHA sitekey={apiKey} onChange={(e) => setIsHuman(e)} />
      </div>
      <button type="submit" className="btn">
        <Icons name="submit" /> SUBMIT
      </button>
    </form>
  );
};

export default Forms;
