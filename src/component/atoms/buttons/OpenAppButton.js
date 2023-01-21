import { useContext } from "react";
import { CalendarContext } from "../../../utils/context/CalendarContext";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import { getEarlyMeeting, setEarliestApp } from "../../../utils/functions/moment";

const OpenAppButton = ({ service }) => {
  const { events, setDay, selectedDay, setMeeting } = useContext(CalendarContext);
  const { setActive } = useContext(ServicesContext);

  const handleClick = () => {
    if (service.uid) {
      setActive(service);
    }
    if (selectedDay.hasList && selectedDay.list.length > 0) {
      const meeting = getEarlyMeeting(selectedDay.list);
      setMeeting(meeting);
    } else setEarliestApp(events.sections, setDay);
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
