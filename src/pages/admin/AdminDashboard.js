import { useContext } from "react";
import MenuLink from "../../component/molecules/MenuLink";
import { AdminContext } from "../../utils/context/AdminContext";
import Appointment from "./AdminAppointment";
import Schedule from "./AdminSchedule";

const AdminDashboard = () => {
  // TODO: LET ADMIN ADD THEIR WORK SCHEDULE
  // TODO: LET ADMIN REMOVE APPOINTMENTS FROM WORK SCHEDULE
  // const { booked,  } = useContext(UserContext);
  const { menu, active, setMenuActive } = useContext(AdminContext);

  const handleClick = (e) => setMenuActive(menu, e);
  // TODO, FORMAT DATE WITH COMA, AND PERIOD.
  const container = {
    schedule: <Schedule />,
    appointment: <Appointment />,
  };
  return (
    <section className="admin-container">
      <nav className="secondary-navigation">
        <ul className="navigation" data-state="open">
          {menu.map((m) => (
            <MenuLink data={m} key={m.uid} click={handleClick} />
          ))}
        </ul>
      </nav>
      {container[active.name]}
    </section>
  );
};

export default AdminDashboard;
