import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import CardHeader from "../molecules/card/CardHeader";
import ListItem from "../atoms/ListItem";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { useEffect } from "react";
import BookEvent from "../molecules/BookEvent";
import SectionBody from "../molecules/SectionBody";
import NotFound from "../molecules/NotFound";
import Log from "../molecules/Log";

const CalendarEvents = () => {
  const { log, selectedDay, meeting, setMeeting } = useContext(CalendarContext);
  const { active } = useContext(ServicesContext);
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    if (meeting.uid) {
      setIsConfirm(true);
    } else setIsConfirm(false);
  }, [meeting]);

  // const onSubmit = (values) => ;
  return (
    <div id="calendar-events">
      <CardHeader data={selectedDay} />
      <div className="list">
        {selectedDay.uid && selectedDay.list.length > 0 ? (
          selectedDay.list.map((d) =>
            d.uid === meeting?.uid ? (
              <ListItem key={d.uid} data={d} click={setMeeting} icon="check" />
            ) : (
              <ListItem key={d.uid} data={d} click={setMeeting} icon="uncheck" />
            )
          )
        ) : (
          <SectionBody />
        )}
      </div>
      {isConfirm && active.uid ? <BookEvent data={active} /> : <NotFound />}
      {log.length > 0 && log.map((l) => <Log key={l.uid} data={l} />)}
    </div>
  );
};
export default CalendarEvents;
