import { useContext } from "react";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { scrollToMeetings } from "../../utils/functions/calendar";
import { formatDate, dateEqual } from "../../utils/functions/moment";
import Icons from "../atoms/Icons";

const AppCalendar = ({ data }) => {
  const [value, onChange] = useState(null);
  const { setDay } = useContext(CalendarContext);

  useEffect(() => {
    if (value) {
      const day = formatDate(value);
      const match = dateEqual(day, data);
      if (match) {
        match.list = match.list.filter((d) => d.isOpen);
        setDay(match);
      }
    } else onChange(new Date());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const tileContent = (date) => {
    const current = new Date(date).getDate();
    const today = new Date().getDate();
    const match = dateEqual(formatDate(date), data);

    if (match && current >= today) {
      const open = match.list.filter((m) => m.isOpen);
      if (open.length > 0) {
        return (
          <div className="match">
            <Icons name={open.length} />
          </div>
        );
      }
    }
  };
  return (
    <Calendar
      onChange={onChange}
      value={value}
      minDate={new Date()}
      minDetail="month"
      prev2Label={null}
      next2Label={null}
      navigationLabel={({ label }) => (
        <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>
      )}
      showNeighboringMonth={false}
      tileContent={({ date }) => tileContent(date)}
      onClickDay={() => scrollToMeetings()}
    />
  );
};

export default AppCalendar;
