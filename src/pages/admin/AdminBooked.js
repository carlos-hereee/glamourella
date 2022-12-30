import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import SecondaryCard from "../../component/template/SecondaryContainer";

const Booked = () => {
  const { booked, filter, setMenuActive } = useContext(AdminContext);
  const click = (e) => {
    console.log("e", e);
  };
  return (
    <SecondaryCard
      data={booked}
      filter={filter}
      isFiltered={false}
      click={click}
    />
  );
};
export default Booked;
