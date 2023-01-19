import { useContext } from "react";
import { UserContext } from "../../../utils/context/UserContext";
import OpenAppButton from "../../atoms/buttons/OpenAppButton";

const DayNotFound = () => {
  const { isAdmin } = useContext(UserContext);
  return isAdmin ? (
    <div className="container-empty">
      <h4>No meeting this day</h4>
      <button type="button">Add a meeting</button>
    </div>
  ) : (
    <div className="container-empty">
      <h4>All booked up, please try a different day</h4>
      <OpenAppButton />
    </div>
  );
};

export default DayNotFound;
