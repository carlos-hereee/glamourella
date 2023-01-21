import { useContext } from "react";
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
  return (
    <div id="calendar-events">
      <CardHeader data={selectedDay} />
      {selectedDay.list?.length > 0 ? <EventList /> : <DayNotFound />}
      {active.uid && meeting.uid ? <BookEvent /> : <NotFound />}
    </div>
  );
};
export default CalendarEvents;
