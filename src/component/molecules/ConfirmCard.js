import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/CalendarContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
});
const ConfirmCard = ({ data }) => {
  const { bookNow, formatTime, formatDate, booked } =
    useContext(CalendarContext);
  const [isRobot, setIsRobot] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        if (!isRobot) {
          setIsRequired(true);
        } else {
          bookNow(values, data);
          setIsRequired(false);
        }
      }}>
      {({ errors }) => (
        <Form className="form">
          <span>
            Appointment set for{" "}
            <strong>
              {formatDate(data.start.dateTime)} @{" "}
              {formatTime(data?.start.dateTime)} -{" "}
              {formatTime(data?.end.dateTime)}
            </strong>
          </span>
          <span className={booked.success ? "message-success" : "required"}>
            {booked.message}
          </span>
          <div>
            <label htmlFor="name">
              Name{" "}
              {errors.name && <span className="required">{errors.name}</span>}
            </label>
          </div>
          <Field type="text" name="name" />
          <div>
            <label htmlFor="email">
              Email{" "}
              {errors.email && <span className="required">{errors.email}</span>}
            </label>
          </div>
          <Field type="email" name="email" />
          <div className="form-submit">
            {isRequired && (
              <span className="required">*Recaptcha is required</span>
            )}
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              id="recaptcha"
              onChange={(e) => setIsRobot(e)}
            />
            <button type="submit" className="btn">
              Confirm
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ConfirmCard;
