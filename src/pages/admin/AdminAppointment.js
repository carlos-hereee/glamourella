import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import AdminContainer from "../../component/template/SecondaryContainer";

const Appointment = () => {
  const { booked, filter, isFiltered, planner } = useContext(AdminContext);

  return (
    <AdminContainer
      data={booked}
      // filtered={planner}
      filter={filter}
      isFiltered={isFiltered}
    />
  );
};
export default Appointment;
