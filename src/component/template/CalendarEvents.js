import { useContext, useState, useEffect } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import CardHeader from "../molecules/card/CardHeader";
import BookEvent from "../molecules/BookEvent";
import NotFound from "../molecules/notFound/MeetingNotFound";
import Log from "../molecules/Log";
import EventList from "../organisms/EventList";
import SectionBody from "../molecules/SectionBody";
import { ServicesContext } from "../../utils/context/ServicesContext";

const CalendarEvents = () => {
  const { log, selectedDay, meeting } = useContext(CalendarContext);
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
      {selectedDay.list?.length > 0 ? <EventList /> : <SectionBody />}
      {isConfirm ? <BookEvent /> : <NotFound />}
      {log.length > 0 && log.map((l) => <Log key={l.uid} data={l} />)}
    </div>
  );
};
export default CalendarEvents;
