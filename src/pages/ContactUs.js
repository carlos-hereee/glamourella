import { useContext } from "react";
import * as yup from "yup";
import Forms from "../component/forms/Forms";
import { CalendarContext } from "../utils/CalendarContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  subject: yup.string().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const ContactUs = () => {
  const { contactUs } = useContext(CalendarContext);

  return (
    <main className="container">
      {/* <Formik
        initialValues={}
        validationSchema={schema}
        onSubmit={(values) => isRobot && contactUs(values)}>
        {({ errors }) => (
          <Form className="form card">
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
      </Formik> */}
      <Forms
        data={{
          initialValues: { name: "", email: "", message: "" },
          schema,
          handleSubmit: contactUs,
        }}
      />
    </main>
  );
};

export default ContactUs;
