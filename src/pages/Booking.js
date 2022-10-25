import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import EventCard from "../component/molecules/EventCard";
import { CalendarContext } from "../utils/CalendarContext";
import moment from "moment";
import Icons from "../component/atoms/Icons";

const Booking = () => {
  const [value, onChange] = useState(new Date());
  const { getCalendarDay, events, calendar } = useContext(CalendarContext);

  // useEffect(() => {
  //   if (value) {
  //     getCalendarDay(value);
  //   }
  // }, [value]);
  const tileContent = (date) => {
    const tileDate = moment(date).format("ddd MMM DD YYYY");
    const event = events.filter((e) => {
      return moment(e.start.dateTime).format("ddd MMM DD YYYY") === tileDate;
    });
    if (event.length) {
      return (
        <p className="required">
          <Icons name={event.length} /> Remaining!
        </p>
      );
    }
  };
  return (
    <div className="card">
      <h1>Booking {}</h1>
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
      <p>{calendar.description}</p>
      {/* <EventCard data={event} /> */}
    </div>
  );
};

export default Booking;
