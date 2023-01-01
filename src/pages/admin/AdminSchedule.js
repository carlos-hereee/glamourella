import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import AppCalendar from "../../component/organisms/AppCalendar";
import CalendarEvents from "../../component/organisms/CalendarEvents";

const Schedule = () => {
  const { schedule } = useContext(AdminContext);

  return (
    <section className="secondary-container">
      <AppCalendar data={schedule.sections} />
      <CalendarEvents data={schedule} />
    </section>
  );
};
export default Schedule;
