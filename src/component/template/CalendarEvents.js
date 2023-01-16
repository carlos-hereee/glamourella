import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import CardHeader from "../molecules/card/CardHeader";
import ListItem from "../atoms/ListItem";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { UserContext } from "../../utils/context/UserContext";
import { useEffect } from "react";
import BookEvent from "../molecules/BookEvent";
import Icons from "../atoms/Icons";

const CalendarEvents = () => {
  const { bookNow, log, selectedDay, appointment, setAppointment } =
    useContext(CalendarContext);
  const { isAdmin } = useContext(UserContext);
  const { active } = useContext(ServicesContext);
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
      <div className="list">
        {selectedDay.uid && selectedDay.list.length > 0 ? (
          selectedDay.list.map((d) => (
            <ListItem
              key={d.uid}
              data={d}
              click={setAppointment}
              icon={d.uid === appointment?.uid ? "check" : "uncheck"}
            />
          ))
        ) : isAdmin ? (
          <>
            <h4>No appointment this day</h4>
            <button>Add an appointment</button>
          </>
        ) : (
          <>
            <h4>All booked up, please try a different day</h4>
            <button>Find Next Open Appointment</button>
          </>
        )}
      </div>
      {isConfirm && (
        <div className="appointment">
          {active.uid ? (
            <BookEvent data={active} app={appointment} onSubmit={onSubmit} />
          ) : (
            <div className="container">
              <p>
                Please select the service you would like to book on this
                appointment
              </p>
              <Icons name="left" size="3x" />
            </div>
          )}
          {log &&
            log.map((l) => (
              <p
                key={l.uid}
                className={l.success ? "message-success" : "required"}>
                {l.message}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};
export default CalendarEvents;
