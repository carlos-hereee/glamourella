import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/CalendarContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  phone: yup.number().required("*Required field"),
});
const ConfirmCard = ({ data }) => {
  const { bookNow, formatTime, formatDate } = useContext(CalendarContext);
  const [isRobot, setIsRobot] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  /**
   * created: "2022-10-25T03:43:11.000Z"
creator:{email: 'jainolanails@gmail.com'}
end: 
{dateTime: '2022-10-27T13:30:00-05:00', timeZone: 'America/Chicago'}
etag:"\"3333338782390000\""
eventType:"default"
htmlLink:"https://www.google.com/calendar/event?eid=MTZ2cnJqdGYyZGNscTdwdnVwMmExZDJkdWEgMTNmNTNlZDVhNGZmNzc4M2VmOTFjOGQ3ZGJlMWMxNWMwZjg5YjRhMDZhZTIyYjcwYTRiODVkODNmMjVmZGE5ZUBn"
iCalUID:"16vrrjtf2dclq7pvup2a1d2dua@google.com"
id:"16vrrjtf2dclq7pvup2a1d2dua"
kind:"calendar#event"
organizer:{email: '13f53ed5a4ff7783ef91c8d7dbe1c15c0f89b4a06ae22b70a4b85d83f25fda9e@group.calendar.google.com', displayName: 'Glamourella', self: true}
sequence :0
start:{dateTime: '2022-10-27T12:30:00-05:00', timeZone: 'America/Chicago'}
status:"confirmed"
summary:"appointment"
updated:"2022-10-25T03:43:11.195Z"
   */
  return (
    <div className="confirmation">
      <p>
        Appointment set for{" "}
        <strong>
          {formatDate(data.start.dateTime)} @ {formatTime(data?.start.dateTime)}{" "}
          - {formatTime(data?.end.dateTime)}
        </strong>
      </p>
      <p>Please fill out form to confirm appointment</p>
      {/* <a href={data.htmlLink}>LINK</a> */}
      <Formik
        initialValues={{ name: "", email: "", phone: 0 }}
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
              <label htmlFor="phone">
                Phone #{" "}
                {errors.phone && (
                  <span className="required">{errors.phone}</span>
                )}
              </label>
            </div>
            <Field type="number" name="phone" />
            <div className="form-submit">
              {isRequired && (
                <span className="required">*Recaptcha is required</span>
              )}
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={(e) => setIsRobot(e)}
              />
              <button type="submit" className="btn">
                Confirm
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConfirmCard;
