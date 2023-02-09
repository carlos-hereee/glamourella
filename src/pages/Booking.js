import { useContext } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import CalendarEvents from "../component/template/CalendarEvents";
import AppCalendar from "../component/organisms/AppCalendar";
import CartEmpty from "../component/molecules/empty/CartEmpty";
import CartItem from "../component/organisms/CartItem";
import ButtonLink from "../component/atoms/buttons/ButtonLink";

const Booking = ({ data }) => {
  const { events } = useContext(CalendarContext);

  return (
    <section className="primary-container">
      <AppCalendar data={events.sections} />
      <div className="booking">
        {data.length > 0 ? (
          <CartItem data={data} />
        ) : (
          <div className="container-empty">
            <CartEmpty />
            <ButtonLink link="services" />
            <ButtonLink link="accessories" />
          </div>
        )}
        <CalendarEvents />
      </div>
    </section>
  );
};

export default Booking;
