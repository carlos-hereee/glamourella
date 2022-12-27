import { useContext, useState } from "react";
// import { NavLink } from "react-router-dom";
import shortid from "shortid";
import CustomLink from "../component/atoms/CustomLink";
import { UserContext } from "../utils/context/UserContext";
import MenuLink from "../component/molecules/MenuLink";
import { CalendarContext } from "../utils/context/CalendarContext";

const AdminDashboard = () => {
  // TODO: LET ADMIN ADD THEIR WORK SCHEDULE
  // TODO: LET ADMIN REMOVE APPOINTMENTS FROM WORK SCHEDULE
  const { user, booked } = useContext(UserContext);
  const { formatDate } = useContext(CalendarContext);
  const [menu, setMenu] = useState([
    { name: "Schedule", uid: shortid.generate() },
  ]);
  const today = formatDate(new Date());
  const [schedule, setSchedule] = useState([
    {
      day: formatDate(new Date()),
      uid: shortid.generate(),
      isToday: true,
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am -12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: formatDate(new Date().setDate(new Date().getDate() + 1)),
      uid: shortid.generate(),
      isToday: false,
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: formatDate(new Date().setDate(new Date().getDate() + 2)),
      uid: shortid.generate(),
      isToday: false,
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: formatDate(new Date().setDate(new Date().getDate() + 3)),
      uid: shortid.generate(),
      isToday: false,
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: formatDate(new Date().setDate(new Date().getDate() + 4)),
      uid: shortid.generate(),
      isToday: false,
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: formatDate(new Date().setDate(new Date().getDate() + 5)),
      uid: shortid.generate(),
      isToday: false,
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
  ]);
  const appointment = (
    <>
      <h3>Upcoming appointments</h3>
      {booked.length > 0 &&
        booked.map((b) => (
          <div key={b.uid}>
            <h3>{b.type}</h3>
            <p>Start count</p>
          </div>
        ))}
    </>
  );
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
