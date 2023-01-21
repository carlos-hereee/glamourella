import { useContext } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import CalendarEvents from "../component/template/CalendarEvents";
import AppCalendar from "../component/organisms/AppCalendar";
import CartEmpty from "../component/molecules/empty/CartEmpty";
import CartItem from "../component/organisms/CartItem";

const Booking = ({ data }) => {
  const { events } = useContext(CalendarContext);

  return (
    <section className="primary-container">
      <AppCalendar data={events.sections} />
      <div className="booking">
        {data.length > 0 ? (
          <div className="secondary-container">
            <CartItem data={data} />
          </div>
        ) : (
          <CartEmpty link="services" />
        )}
        <CalendarEvents />
      </div>
    </section>
  );
};

export default Booking;
