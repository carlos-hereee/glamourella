import { useContext, useState, useEffect } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import CardHeader from "../molecules/card/CardHeader";
import BookEvent from "../molecules/BookEvent";
import NotFound from "../molecules/notFound/MeetingNotFound";
import EventList from "../organisms/EventList";
import { ServicesContext } from "../../utils/context/ServicesContext";
import DayNotFound from "../molecules/notFound/DayNotFound";

const CalendarEvents = () => {
  const { selectedDay, meeting } = useContext(CalendarContext);
  const { active } = useContext(ServicesContext);
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    if (active.uid) {
      meeting.uid && setIsConfirm(true);
    } else setIsConfirm(false);
  }, [active, meeting]);
  return (
    <div id="calendar-events">
      <CardHeader data={selectedDay} />
      {selectedDay.list?.length > 0 ? <EventList /> : <DayNotFound />}
      {isConfirm ? <BookEvent /> : <NotFound />}
    </div>
  );
};
export default CalendarEvents;
