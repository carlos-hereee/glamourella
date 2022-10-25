import { useContext } from "react";
import { CalendarContext } from "../../utils/CalendarContext";
import Empty from "../atoms/Empty";

const CalendarEvents = () => {
  const { selectedDay, calendar } = useContext(CalendarContext);
  console.log("calendar", calendar);
  return (
    <div className="card">
      <h2>{calendar.summary}</h2>
      <p>{calendar.description}</p>
      {selectedDay.length ? "" : <Empty />}
    </div>
  );
};
export default CalendarEvents;
