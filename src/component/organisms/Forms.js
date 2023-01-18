import { getIn, useFormik } from "formik";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Icons from "../atoms/Icons";

const Forms = ({ data }) => {
  const [isHuman, setIsHuman] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  // const [isHuman, isRequired, setIsHuman] = useCaptcha();
  const textarea = ["message"];
  const types = {
    password: "password",
    confirmPassword: "password",
    email: "text",
    name: "text",
    phone: "number",
  };

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
  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.keys(data.values).map(
        (v) =>
          v !== "recaptcha" && (
            <div key={v}>
              <div>
                <label htmlFor={v}>
                  {v.charAt(0).toUpperCase() + v.slice(1)}{" "}
                  {formik.errors[v] && (
                    <span className="required">{formik.errors[v]}</span>
                  )}
                </label>
              </div>
              {textarea.includes(v) ? (
                <textarea
                  type="text"
                  name={v}
                  value={getIn(formik.values, v)}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                />
              ) : (
                <input
                  type={types[v]}
                  autoComplete="on"
                  name={v}
                  value={getIn(formik.values, v)}
                  placeholder={v}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                />
              )}
            </div>
          )
      )}
      <div className="form-submit">
        {isRequired && <span className="required">*Recaptcha is required</span>}
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={(e) => e && setIsHuman(e)}
          size={window.screen.width < 481 ? "compact" : "normal"}
        />
      </div>
      <button type="submit" className="btn btn-classic">
        <Icons name="submit" /> SEND
      </button>
    </form>
  );
};

export default Forms;
