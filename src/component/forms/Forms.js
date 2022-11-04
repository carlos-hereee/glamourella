import { Field, Form, Formik } from "formik";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Buttons from "../atoms/Buttons";

const Forms = ({ data }) => {
  const [isHuman, setIsHuman] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const textarea = ["message"];
  return (
    <Formik
      initialValues={data.initialValues}
      validationSchema={data.schema}
      onSubmit={(values) => {
        if (isHuman) {
          setIsRequired(false);
          data.handleSubmit(values);
        } else setIsRequired(true);
      }}>
      {({ errors }) => (
        <Form className="form card">
          {Object.keys(data.initialValues).map((value) => (
            <div key={value}>
              <label htmlFor={value}>
                {value}{" "}
                {errors[value] && (
                  <span className="required">{errors[value]}</span>
                )}
              </label>
              {textarea.includes(value) ? (
                <Field
                  type={typeof value}
                  name={value}
                  component="textarea"
                  className="textarea"
                />
              ) : (
                <Field type={typeof value} name={value} />
              )}
            </div>
          ))}
          {isRequired && (
            <span className="required">*Recaptcha is required</span>
          )}
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={(e) => setIsHuman(e)}
          />{" "}
          <Buttons name="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
