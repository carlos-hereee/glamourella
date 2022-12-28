import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import SecondaryCard from "../../component/template/SecondaryContainer";

const Schedule = () => {
  const { schedule, filter, isFiltered, planner } = useContext(AdminContext);
  return (
    <SecondaryCard
      data={schedule}
      filtered={planner}
      filter={filter}
      isFiltered={isFiltered}
    />
  );
};
export default Schedule;
