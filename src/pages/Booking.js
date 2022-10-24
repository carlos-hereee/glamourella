import { useState } from "react";
import { Calendar } from "react-calendar";

const Booking = () => {
  const [value, onChange] = useState(new Date());
  console.log("value", value);

  return (
    <div>
      <h1>Booking</h1>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Booking;
