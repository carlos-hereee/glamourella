import { useContext } from "react";
import { CalendarContext } from "../../../utils/context/CalendarContext";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import { setEarliestApp } from "../../../utils/functions/moment";

const OpenAppButton = ({ service }) => {
  const { events, setDay } = useContext(CalendarContext);
  const { setActive } = useContext(ServicesContext);

  const handleClick = () => {
    if (service.uid) {
      setActive(service);
    }
    setEarliestApp(events.sections, setDay);
  };
  return (
    <button
      type="button"
      className="btn btn-link"
      onClick={() => handleClick(service)}>
      Find Open Appointment
    </button>
  );
};
export default OpenAppButton;
