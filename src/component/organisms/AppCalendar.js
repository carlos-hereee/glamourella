import { Calendar } from "react-calendar";
import { formatDate, isDateEqual } from "../../utils/moment";
import Icons from "../atoms/Icons";

const AppCalendar = ({ change, value, data }) => {
  const tileContent = (date) => {
    const current = new Date(date).getDate();
    const today = new Date().getDate();
    const match = isDateEqual(formatDate(date), data);
    if (match.length && current >= today) {
      return (
        <div className="match">
          <Icons name={match.length} />
        </div>
      );
    }
  };
  return (
    <Calendar
      onChange={change}
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
