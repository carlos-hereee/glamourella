import { getIn, useFormik } from "formik";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Icons from "../atoms/Icons";

const Forms = ({ data }) => {
  const [isHuman, setIsHuman] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  const apiKey = process.env.REACT_APP_SITE_KEY;
  const textarea = ["message"];
  const passwords = ["password", "confirmPassword"];

  const formik = useFormik({
    initialValues: data.values,
    onSubmit: (values) => {
      if (isHuman) {
        setIsRequired(false);
        data.onSubmit(values);
      } else setIsRequired(true);
    },
    validationSchema: data.schema,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  const handleChange = (e) => {
    formik.handleChange(e);
    formik.handleBlur(e);
  };
  const onChange = (e) => setIsHuman(e);

  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.keys(data.values).map((ref) => (
        <div key={ref}>
          <div>
            <label htmlFor={ref}>
              {ref.charAt(0).toUpperCase() + ref.slice(1)}{" "}
              {formik.errors[ref] && (
                <span className="required">{formik.errors[ref]}</span>
              )}
            </label>
          </div>
          {textarea.includes(ref) ? (
            <textarea
              type="text"
              name={ref}
              value={getIn(formik.values, ref)}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              autoComplete="on"
            />
          ) : (
            <input
              type={passwords.includes(ref) ? "password" : "text"}
              autoComplete={data.isLogin ? "current-password" : "new-password"}
              name={ref}
              value={getIn(formik.values, ref)}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
          )}
        </div>
      ))}
      <div className="form-submit">
        {isRequired && <span className="required">*Recaptcha is required</span>}
        <ReCAPTCHA
          sitekey={apiKey}
          onChange={onChange}
          size={window.screen.width < 481 ? "compact" : "normal"}
        />
      </div>
      <button type="submit" className="btn">
        <Icons name="submit" /> SUBMIT
      </button>
    </form>
  );
};

export default Forms;
