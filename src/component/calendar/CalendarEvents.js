import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import Empty from "../atoms/Empty";
import Icons from "../atoms/Icons";
import * as yup from "yup";
import Forms from "../forms/Forms";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CartCard from "../molecules/CartCard";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
});
const CalendarEvents = () => {
  const { selectedDay, calendar, formatTime, bookNow, formatDate, log } =
    useContext(CalendarContext);
  const { cart } = useContext(ServicesContext);
  const [appointment, setAppointment] = useState();
  const [confirmation, setConfirmation] = useState(false);
  const onSubmit = (values) => bookNow(values, appointment);
  return (
    <section className="card" id="calendar-events">
      <div className="card-header">
        <h2>{calendar.summary}</h2>
        <p>{calendar.description}</p>
      </div>
      {cart &&
        cart.map((c) => (
          <div key={c.uid}>
            <CartCard data={c} />
          </div>
        ))}
      {confirmation ? (
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
      ) : (
        <>
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
                  {formatTime(day.start.dateTime)} -{" "}
                  {formatTime(day.end.dateTime)}
                </button>
              ))
            ) : (
              <Empty />
            )}
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn-primary"
              disabled={!appointment?.id}
              onClick={() => setConfirmation(!confirmation)}>
              Book Now!
            </button>
          </div>
        </>
      )}
    </section>
  );
};
export default CalendarEvents;
