import Forms from "../organisms/Forms";
import * as yup from "yup";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { UserContext } from "../../utils/context/UserContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  recaptcha: yup.string().required("*Required field"),
  phone: yup.number().required("*Required field"),
});
const values = { name: "", email: "", phone: "" };
const BookEvent = () => {
  const { bookNow, meeting } = useContext(CalendarContext);
  const { active } = useContext(ServicesContext);
  const { user } = useContext(UserContext);
  return (
    <div>
      <h3>
        Booking:{" "}
        <strong>
          {active.title} {active.subtitle}
        </strong>
      </h3>
      <p>
        Appointment set for{" "}
        <strong>
          {meeting.date} @ {meeting.time.startTime} -{meeting.time.endTime}
        </strong>
      </p>
      <p>Please fill out information bellow</p>
      {user.uid ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <Forms data={{ values, schema, onSubmit: (e) => bookNow(e, meeting) }} />
      )}
    </div>
  );
};
export default BookEvent;
