import Forms from "../organisms/Forms";
import * as yup from "yup";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
});
const values = { name: "", email: "" };
const BookEvent = () => {
  const { bookNow, meeting } = useContext(CalendarContext);
  const { active } = useContext(ServicesContext);
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
      <Forms data={{ values, schema, onSubmit: (e) => bookNow(e, meeting) }} />
    </div>
  );
};
export default BookEvent;
