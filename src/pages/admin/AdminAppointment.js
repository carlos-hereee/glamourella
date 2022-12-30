import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import SecondaryContainer from "../../component/template/SecondaryContainer";

const Appointment = () => {
  const { appointment, filter, planner, isFiltered } = useContext(AdminContext);

  // const click = (e) => {
  //   console.log("click", e);
  // };
  return (
    <SecondaryContainer
      data={appointment}
      filtered={planner}
      filter={filter}
      isFiltered={isFiltered}
      // click={click}
    />
  );
};
export default Appointment;
