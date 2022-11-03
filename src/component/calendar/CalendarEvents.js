import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/CalendarContext";
import Empty from "../atoms/Empty";
import Icons from "../atoms/Icons";
import ConfirmCard from "../molecules/ConfirmCard";

const CalendarEvents = () => {
  const { selectedDay, calendar, formatTime, booked } =
    useContext(CalendarContext);
  const [appointment, setAppointment] = useState();
  const [confirmation, setConfirmation] = useState(false);
  console.log("booked", booked);
  return (
    <div className="card">
      <div className="card-header">
        <h2>{calendar.summary}</h2>
        <p>{calendar.description}</p>
      </div>
      {confirmation ? (
        <ConfirmCard data={appointment} />
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
              className="btn"
              disabled={!appointment?.id}
              onClick={() => setConfirmation(!confirmation)}>
              Book Now!
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default CalendarEvents;
