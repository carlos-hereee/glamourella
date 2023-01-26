import { getIn, useFormik } from "formik";
import Icons from "../atoms/Icons";

const Field = ({ data, submit, max, change }) => {
  const types = {
    quantity: "number",
  };

  const { handleSubmit, handleBlur, handleChange, values, errors } = useFormik({
    initialValues: data.values,
    onSubmit: (e) => submit(e),
    validationSchema: data.schema,
  });
  const handleOnChange = (e) => {
    handleChange(e);
    change(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.keys(data.values).map((v) => (
        <div key={v} className="field">
          <label htmlFor={v}>
            {v.charAt(0).toUpperCase() + v.slice(1)}{" "}
            {errors[v] && <span className="required">{errors[v]}</span>}
          </label>
          <input
            type={types[v]}
            autoComplete="on"
            max={max}
            min={1}
            name={v}
            value={getIn(values, v)}
            placeholder={v}
            onChange={handleOnChange}
            onBlur={handleBlur}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-classic">
        <Icons name="submit" /> SEND
      </button>
    </form>
  );
};

export default Field;
