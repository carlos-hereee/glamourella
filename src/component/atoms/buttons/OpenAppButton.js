import { useContext } from "react";
import { CalendarContext } from "../../../utils/context/CalendarContext";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import { minDate, getMeetingList, minTime } from "../../../utils/functions/moment";

const OpenAppButton = ({ service }) => {
  const { events, setDay, selectedDay, setMeeting } = useContext(CalendarContext);
  const { setActive } = useContext(ServicesContext);

  const handleClick = () => {
    if (service.uid) {
      setActive(service);
    }
    if (selectedDay.hasList && selectedDay.list.length > 0) {
      const meeting = minDate(selectedDay.list);
      setMeeting(meeting);
    } else {
      const meetingList = getMeetingList(events.sections);
      const meetingDay = minDate(meetingList);
      const meetingTime = minTime(meetingDay.list);
      setDay(meetingDay);
      setMeeting(meetingTime);
    }
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
