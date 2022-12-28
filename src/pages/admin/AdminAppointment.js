import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import SecondaryContainer from "../../component/template/SecondaryContainer";

const Appointment = () => {
  const { booked, filter, isFiltered } = useContext(AdminContext);

  return (
    <SecondaryContainer
      data={booked}
      // filtered={planner}
      filter={filter}
      isFiltered={isFiltered}
    />
  );
};
export default Appointment;
