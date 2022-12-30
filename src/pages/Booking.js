/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import CalendarEvents from "../component/organisms/CalendarEvents";
import BookingEvents from "../component/organisms/BookingEvents";
import { ServicesContext } from "../utils/context/ServicesContext";
import { formatDate, isDateEqual } from "../utils/moment";
import AppCalendar from "../component/organisms/AppCalendar";

const Booking = () => {
  const [value, onChange] = useState(null);
  const { events, setDay } = useContext(CalendarContext);
  const { cart } = useContext(ServicesContext);

  useEffect(() => {
    if (value) {
      const day = formatDate(value);
      setDay(isDateEqual(day, events));
      document.getElementById("calendar-events").scrollIntoView();
    }
  }, [value]);

  return (
    <section className="container">
      {cart.length > 0 && <BookingEvents data={cart} />}
      <AppCalendar change={onChange} value={value} data={events} />
      <CalendarEvents />
    </section>
  );
};

export default Booking;
