import { useContext } from "react";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { formatDate, dateEqual } from "../../utils/moment";
import Icons from "../atoms/Icons";

const AppCalendar = ({ data }) => {
  const [value, onChange] = useState(null);
  const { setDay } = useContext(CalendarContext);

  useEffect(() => {
    if (value) {
      const day = formatDate(value);
      setDay(dateEqual(day, data));
      // document.getElementById("calendar-events").scrollIntoView();
    } else onChange(new Date());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const tileContent = (date) => {
    const current = new Date(date).getDate();
    const today = new Date().getDate();
    const match = dateEqual(formatDate(date), data);
    if (match && current >= today) {
      return (
        <div className="match">
          <Icons name={match.list.length} />
        </div>
      );
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
    />
  );
};

export default AppCalendar;
