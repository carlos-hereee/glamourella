import { useContext } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import CalendarEvents from "../component/template/CalendarEvents";
import { ServicesContext } from "../utils/context/ServicesContext";
import AppCalendar from "../component/organisms/AppCalendar";
import CartEmpty from "../component/molecules/empty/CartEmpty";
import CartItem from "../component/organisms/CartItem";

const Booking = () => {
  const { events } = useContext(CalendarContext);
  const { cart } = useContext(ServicesContext);

  return (
    <section className="container">
      <AppCalendar data={events.sections} />
      <div className="booking">
        {cart.length > 0 ? (
          <CartItem data={cart.filter((c) => c.isBookable)} />
        ) : (
          <CartEmpty link="services" />
        )}
        <CalendarEvents />
      </div>
    </section>
  );
};

export default Booking;
