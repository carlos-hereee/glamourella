import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import * as yup from "yup";
import Forms from "./Forms";
import CardHeader from "../molecules/card/CardHeader";
import { AdminContext } from "../../utils/context/AdminContext";
import { formatDate, formatTime } from "../../utils/moment";
import ListItem from "../atoms/ListItem";
import { ServicesContext } from "../../utils/context/ServicesContext";
import BookingEvents from "./BookingEvents";
import { UserContext } from "../../utils/context/UserContext";
import { useEffect } from "react";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
});
const values = { name: "", email: "" };
const CalendarEvents = () => {
  const { bookNow, log, selectedDay, appointment, setAppointment } =
    useContext(CalendarContext);
  const { isAdmin } = useContext(UserContext);
  const { cart } = useContext(ServicesContext);
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    if (appointment.uid) {
      setIsConfirm(true);
    } else setIsConfirm(false);
  }, [appointment]);

  const onSubmit = (values) => bookNow(values, appointment);
  return (
    <div id="calendar-events">
      <CardHeader data={selectedDay} />
      <div>
        {selectedDay.hasList ? (
          selectedDay.list.map((d) => (
            <ListItem
              key={d.uid}
              data={d}
              click={setAppointment}
              icon={d.uid === appointment?.uid ? "check" : "uncheck"}
            />
          ))
        ) : isAdmin ? (
          <h4>No appointment this day, try a different day</h4>
        ) : (
          <h4>All booked up, please come back tomorrow</h4>
        )}
      </div>

      {isConfirm && (
        <div className="appointment">
          <p>Booking: </p>
          <p>
            Appointment set for{" "}
            <strong>
              {appointment.date} @ {appointment.time.startTime} -
              {appointment.time.endTime}
            </strong>
          </p>
          <p>Please fill out information bellow</p>
          {log &&
            log.map((l) => (
              <p
                key={l.uid}
                className={l.success ? "message-success" : "required"}>
                {l.message}
              </p>
            ))}
          <Forms data={{ values, schema, onSubmit }} />
        </div>
      )}
    </div>
  );
};
export default CalendarEvents;
