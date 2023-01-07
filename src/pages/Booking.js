/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
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
      {/* {cart.length > 0 && <BookingEvents data={cart} />} */}
      <AppCalendar data={events.sections} />
      <CalendarEvents />
    </section>
  );
};

export default Booking;
