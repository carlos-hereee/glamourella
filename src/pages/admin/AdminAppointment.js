import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import SecondaryContainer from "../../component/template/SecondaryContainer";

const Appointment = () => {
  const { meeting, filter, planner, isFiltered } = useContext(AdminContext);

  // const click = (e) => {
  //   console.log("click", e);
  // };
  return (
    <SecondaryContainer
      data={meeting}
      filtered={planner}
      filter={filter}
      isFiltered={isFiltered}
      // click={click}
    />
  );
};
export default Appointment;
