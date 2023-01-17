import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import CardHeader from "../molecules/card/CardHeader";
import ListItem from "../atoms/ListItem";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { useEffect } from "react";
import BookEvent from "../molecules/BookEvent";
import Icons from "../atoms/Icons";
import SectionBody from "../molecules/SectionBody";

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
      {isConfirm && (
        <div className="meeting">
          {active.uid ? (
            <BookEvent data={active} />
          ) : (
            <div className="container">
              <p>Please select the service you would like to book on this meeting</p>
              <Icons name="left" size="3x" />
            </div>
          )}
        </div>
      )}
      {log.length > 0 &&
        log.map((l) => (
          <p key={l.uid} className={l.success ? "message-success" : "required"}>
            {l.message}
          </p>
        ))}
    </div>
  );
};
export default CalendarEvents;
