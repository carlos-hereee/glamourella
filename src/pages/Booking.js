import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import EventCard from "../component/molecules/EventCard";
import { CalendarContext } from "../utils/CalendarContext";

const Booking = () => {
  const [value, onChange] = useState(new Date());
  const { getCalendarDay, events, calendar } = useContext(CalendarContext);

  useEffect(() => {
    if (value) {
      getCalendarDay(value);
    }
  }, [value]);

  console.log("calendar", calendar);
  console.log("events", events);
  return (
    <div>
      <h1>Booking {}</h1>
      <Calendar onChange={onChange} value={value} minDate={value} />
      <p>{calendar.description}</p>
      {/* <EventCard data={event} /> */}
    </div>
  );
};

export default Booking;
