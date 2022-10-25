import { Formik, Form, Field } from "formik";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  subject: yup.string().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const ContactUs = () => {
  const [isRobot, setIsRobot] = useState(true);

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
        // onSubmit={(values)=> isRobot && contactUs(values)}
      >
        {({ errors }) => (
          <Form className="form">
            <div>
              <label htmlFor="name">
                Name{" "}
                {errors.name && <span className="validate">{errors.name}</span>}
              </label>
            </div>
            <Field type="text" name="name" />
            <div>
              <label htmlFor="email">
                Email{" "}
                {errors.email && (
                  <span className="validate">{errors.email}</span>
                )}
              </label>
            </div>
            <Field type="email" name="email" />
            <div>
              <label htmlFor="subject">
                Subject{" "}
                {errors.subject && (
                  <span className="validate">{errors.subject}</span>
                )}
              </label>
            </div>
            <Field type="text" name="subject" />
            <div>
              <label htmlFor="message">
                Message{" "}
                {errors.message && (
                  <span className="validate">{errors.message}</span>
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
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={() => setIsRobot(!isRobot)}
              />
              <button type="submit" className="btn">
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
