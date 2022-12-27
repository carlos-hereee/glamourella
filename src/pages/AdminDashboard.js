import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { UserContext } from "../utils/context/UserContext";
import MenuLink from "../component/molecules/MenuLink";
import { CalendarContext } from "../utils/context/CalendarContext";
import { AdminContext } from "../utils/context/AdminContext";
import Schedule from "../component/organisms/Schedule";

const Appointment = (
  <>
    <h3>Upcoming appointments</h3>
    {/* {booked.length > 0 &&
        booked.map((b) => (
          <div key={b.uid}>
            <h3>{b.type}</h3>
            <p>Start count</p>
          </div>
        ))} */}
  </>
);
const AdminDashboard = () => {
  // TODO: LET ADMIN ADD THEIR WORK SCHEDULE
  // TODO: LET ADMIN REMOVE APPOINTMENTS FROM WORK SCHEDULE
  // const { booked,  } = useContext(UserContext);
  const { menu, active, setMenuActive } = useContext(AdminContext);

  const handleClick = (e) => setMenuActive(menu, e);
  // TODO, FORMAT DATE WITH COMA, AND PERIOD.
  const container = {
    schedule: <Schedule />,
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
