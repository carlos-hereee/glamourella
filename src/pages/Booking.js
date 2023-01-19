import { useContext } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import CalendarEvents from "../component/template/CalendarEvents";
import AppCalendar from "../component/organisms/AppCalendar";
import CartEmpty from "../component/molecules/empty/CartEmpty";
import CartItem from "../component/organisms/CartItem";

const Booking = ({ data }) => {
  const { events } = useContext(CalendarContext);

  const handleClick = (e) => {
    console.log("e", e);
  };
  return (
    <section className="container">
      <AppCalendar data={events.sections} />
      <div className="booking">
        {data.length > 0 ? (
          <div className="primary-container">
            <CartItem data={data} click={handleClick} />
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
