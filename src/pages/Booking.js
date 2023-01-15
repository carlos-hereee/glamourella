import { useContext } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import CalendarEvents from "../component/organisms/CalendarEvents";
import BookingEvents from "../component/organisms/BookingEvents";
import { ServicesContext } from "../utils/context/ServicesContext";
import AppCalendar from "../component/organisms/AppCalendar";

const Booking = () => {
  const { events } = useContext(CalendarContext);
  const { cart } = useContext(ServicesContext);

  return (
    <section className="container">
      <AppCalendar data={events.sections} />
      <div className="booking">
        {cart.length > 0 && <BookingEvents data={cart} />}
        <CalendarEvents />
      </div>
    </section>
  );
};

export default Booking;
