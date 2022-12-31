import { useContext, useState } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import SecondaryCard from "../../component/template/SecondaryContainer";
import AppCalendar from "../../component/organisms/AppCalendar";
import CalendarEvents from "../../component/organisms/CalendarEvents";

const Schedule = () => {
  const { schedule } = useContext(AdminContext);

  return (
    <SecondaryCard data={schedule}>
      <AppCalendar data={schedule.sections} />
      <CalendarEvents />
    </SecondaryCard>
  );
};
export default Schedule;
