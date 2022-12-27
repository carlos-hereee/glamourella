import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { UserContext } from "../utils/context/UserContext";
import MenuLink from "../component/molecules/MenuLink";
import { CalendarContext } from "../utils/context/CalendarContext";
import { AdminContext } from "../utils/context/AdminContext";

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
  const { schedule, menu } = useContext(AdminContext);

  const handleClick = (e) => {
    let item = e.target.innerText;
    menu.findIndex((m) => m.uid);
  };
  // TODO, FORMAT DATE WITH COMA, AND PERIOD.
  return (
    <section className="admin-container">
      <nav className="secondary-navigation">
        <ul className="navigation" data-state="open">
          {menu.map((m) => (
            <MenuLink data={m} key={m.uid} handleClick={handleClick} />
          ))}
        </ul>
      </nav>
      <div className="primary-container">
        <h3 className="title">My schedule</h3>
        {schedule.length > 0 &&
          schedule.map((s) => (
            <div className="admin-content" key={s.uid}>
              <p>
                <strong>{s.day}</strong>
              </p>
              <div className="list">
                {s.shift.length > 0 &&
                  s.shift.map((sh) => (
                    <button
                      type="button"
                      className="btn list-item"
                      key={sh.uid}>
                      {sh.time}
                    </button>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AdminDashboard;
