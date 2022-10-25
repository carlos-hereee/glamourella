import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/CalendarContext";
import Empty from "../atoms/Empty";
import Icons from "../atoms/Icons";

const CalendarEvents = () => {
  const { selectedDay, calendar, formatTime } = useContext(CalendarContext);
  const [appointment, setAppointment] = useState();

  const selectAppointment = (app) => {
    setAppointment(app);
  };
  return (
    <div className="card">
      <h2>{calendar.summary}</h2>
      <p>{calendar.description}</p>
      {selectedDay.length ? (
        selectedDay.map((day) => (
          <button
            type="button"
            className="btn"
            key={day.id}
            onClick={() => selectAppointment(day)}>
            {day.id === appointment?.id ? (
              <Icons name="check" />
            ) : (
              <Icons name="uncheck" />
            )}
            {formatTime(day.start.dateTime)} - {formatTime(day.end.dateTime)}
          </button>
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
};
export default CalendarEvents;
