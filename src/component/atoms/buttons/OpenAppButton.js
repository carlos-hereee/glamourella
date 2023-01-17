import { useContext } from "react";
import { CalendarContext } from "../../../utils/context/CalendarContext";
import { setEarliestApp } from "../../../utils/functions/moment";

const OpenAppButton = () => {
  const { events, setDay } = useContext(CalendarContext);
  return (
    <button
      type="button"
      className="btn btn-classic"
      onClick={() => setEarliestApp(events.sections, setDay)}>
      Find Open Appointment
    </button>
  );
};
export default OpenAppButton;
