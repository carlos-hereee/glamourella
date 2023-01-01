import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import Icons from "../atoms/Icons";
import * as yup from "yup";
import Forms from "./Forms";
import CardHeader from "../molecules/card/CardHeader";
import { AdminContext } from "../../utils/context/AdminContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
});
const CalendarEvents = ({ data }) => {
  const { selectedDay, calendar, formatTime, bookNow, formatDate, log } =
    useContext(CalendarContext);
  const { isAdmin } = useContext(AdminContext);
  const [appointment, setAppointment] = useState();
  const [confirmation, setConfirmation] = useState(false);
  const onSubmit = (values) => bookNow(values, appointment);
  const content = {
    title: calendar.title,
    subtitle: calendar.description,
    isHeroEmpty: true,
  };
  return (
    <div id="calendar-events">
      <CardHeader data={content} />
      <div className="list">
        {selectedDay.length ? (
          selectedDay.map((day) => (
            <button
              type="button"
              className="btn list-item"
              key={day.id}
              onClick={() => setAppointment(day)}>
              {day.id === appointment?.id ? (
                <Icons name="check" />
              ) : (
                <Icons name="uncheck" />
              )}
              {formatTime(day.start.dateTime)} - {formatTime(day.end.dateTime)}
            </button>
          ))
        ) : isAdmin ? (
          <h4>No appointment this day, add some here</h4>
        ) : (
          <h4>All booked up, please come back tomorrow</h4>
        )}
      </div>

      {confirmation && (
        <>
          <p>
            Appointment set for{" "}
            <strong>
              {formatDate(appointment?.start.dateTime)} @{" "}
              {formatTime(appointment?.start.dateTime)} -{" "}
              {formatTime(appointment?.end.dateTime)}
            </strong>
          </p>
          {log &&
            log.map((l) => (
              <p key={l} className={l.success ? "message-success" : "required"}>
                {l.message}
              </p>
            ))}
          <Forms data={{ values: { name: "", email: "" }, schema, onSubmit }} />
        </>
      )}
    </div>
  );
};
export default CalendarEvents;
