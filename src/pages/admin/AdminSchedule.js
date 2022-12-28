import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import AdminContainer from "../../component/template/SecondaryContainer";

const Schedule = () => {
  const { schedule, filter, isFiltered, planner } = useContext(AdminContext);
  return (
    <AdminContainer
      data={schedule}
      filtered={planner}
      filter={filter}
      isFiltered={isFiltered}
    />
  );
};
export default Schedule;
