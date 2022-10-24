import { useState } from "react";
import { Calendar } from "react-calendar";
import EventCard from "../component/molecules/EventCard";

const Booking = () => {
  const [value, onChange] = useState(new Date());
  const event = {
    id: "123abc",
    date: "",
  };

  return (
    <div>
      <h1>Booking</h1>
      <Calendar onChange={onChange} value={value} />
      <EventCard data={event} />
    </div>
  );
};

export default Booking;
