import { Formik, Form, Field } from "formik";
import { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as yup from "yup";
import { CalendarContext } from "../utils/CalendarContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  subject: yup.string().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const ContactUs = () => {
  const [isRobot, setIsRobot] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const { contactUs } = useContext(CalendarContext);

  const handleClick = () => {
    if (!isRobot) {
      setIsRequired(true);
    } else setIsRequired(false);
  };
  return (
    <section className="card">
      <h2>Contact Us </h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => isRobot && contactUs(values)}>
        {({ errors }) => (
          <Form className="form">
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
                {errors.email && (
                  <span className="required">{errors.email}</span>
                )}
              </label>
            </div>
            <Field type="email" name="email" />
            <div>
              <label htmlFor="subject">
                Subject{" "}
                {errors.subject && (
                  <span className="required">{errors.subject}</span>
                )}
              </label>
            </div>
            <Field type="text" name="subject" />
            <div>
              <label htmlFor="message">
                Message{" "}
                {errors.message && (
                  <span className="required">{errors.message}</span>
                )}
              </label>
            </div>
            <Field
              type="text"
              name="message"
              component="textarea"
              className="textarea"
            />
            <div className="form-submit">
              {isRequired && (
                <span className="required">*Recaptcha is required</span>
              )}
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={(e) => setIsRobot(e)}
              />
              <button type="submit" className="btn" onClick={handleClick}>
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactUs;
