import { useContext, useState } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import SecondaryCard from "../../component/template/SecondaryContainer";
import AppCalendar from "../../component/organisms/AppCalendar";

const Schedule = () => {
  const { schedule, filter, isFiltered, planner } = useContext(AdminContext);
  const [value, onChange] = useState(null);

  return (
    <>
      <AppCalendar change={onChange} value={value} data={schedule.sections} />
      <SecondaryCard
        data={schedule}
        filtered={planner}
        filter={filter}
        isFiltered={isFiltered}
      />
    </>
  );
};
export default Schedule;
