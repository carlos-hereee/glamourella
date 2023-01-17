import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";

const SectionBody = () => {
  const { isAdmin } = useContext(UserContext);
  return isAdmin ? (
    <div>
      <h4>No meeting this day</h4>
      <button>Add an meeting</button>
    </div>
  ) : (
    <div>
      <h4>All booked up, please try a different day</h4>
      <button>Find Next Open Appointment</button>
    </div>
  );
};

export default SectionBody;
