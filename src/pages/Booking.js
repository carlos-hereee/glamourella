import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { CalendarContext } from "../utils/CalendarContext";
import Icons from "../component/atoms/Icons";
import CalendarEvents from "../component/calendar/CalendarEvents";

const Booking = () => {
  const [value, onChange] = useState(null);
  const { events, setDay, formatDate, isDateEqual } =
    useContext(CalendarContext);

  useEffect(() => {
    if (value) {
      const day = formatDate(value);
      setDay(isDateEqual(day, events));
      document.getElementById("calendar-events").scrollIntoView();
    }
  }, [value]);

  const tileContent = (date) => {
    const current = formatDate(date);
    const today = formatDate(new Date());
    const match = isDateEqual(current, events);
    if (match.length && current <= today) {
      return (
        <p className="required">
          <Icons name={match.length} /> Remaining!
        </p>
      );
    }
  };
  return (
    <main className="container">
      <Calendar
        onChange={onChange}
        value={value}
        minDate={new Date()}
        minDetail="month"
        prev2Label={null}
        next2Label={null}
        navigationLabel={({ label }) => (
          <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>
        )}
        showNeighboringMonth={false}
        tileContent={({ date }) => tileContent(date)}
      />
      <CalendarEvents />
    </main>
  );
};

export default Booking;
