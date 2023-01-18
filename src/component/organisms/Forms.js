import { getIn, useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import Icons from "../atoms/Icons";

const Forms = ({ data, submit }) => {
  const textarea = ["message"];
  const types = {
    password: "password",
    confirmPassword: "password",
    email: "text",
    name: "text",
    phone: "number",
  };

  const { handleSubmit, handleBlur, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: data.values,
      onSubmit: (e) => submit(e),
      validationSchema: data.schema,
    });

  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.keys(data.values).map((v) => (
        <div key={v}>
          <div>
            <label htmlFor={v}>
              {v.charAt(0).toUpperCase() + v.slice(1)}{" "}
              {errors[v] && <span className="required">{errors[v]}</span>}
            </label>
          </div>
          {textarea.includes(v) ? (
            <textarea
              type="text"
              name={v}
              value={getIn(values, v)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <input
              type={types[v]}
              autoComplete="on"
              name={v}
              value={getIn(values, v)}
              placeholder={v}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>
      ))}
      <div className="form-submit">
        {errors["recaptcha"] && <span className="required">{errors.recaptcha}</span>}
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={(e) => setFieldValue("recaptcha", e)}
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
