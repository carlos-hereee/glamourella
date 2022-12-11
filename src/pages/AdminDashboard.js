import { useContext } from "react";
import shortid from "shortid";
import CustomLink from "../component/atoms/CustomLink";
import { UserContext } from "../utils/context/UserContext";

const AdminDashboard = () => {
  // TODO: ADMIN ADD THEIR WORK SCHEDULE
  // TODO:
  const { user, booked } = useContext(UserContext);
  const schedule = [
    {
      day: "monday",
      uid: shortid.generate(),
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am -12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: "tuesday",
      uid: shortid.generate(),
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: "wednesday",
      uid: shortid.generate(),
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: "friday",
      uid: shortid.generate(),
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: "saturday",
      uid: shortid.generate(),
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
    {
      day: "sunday",
      uid: shortid.generate(),
      shift: [
        { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
        { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
        { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
        { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
      ],
    },
  ];

  return (
    <div className="card-container">
      <h2>Admin dashboard</h2>
      <h3>My schedule</h3>
      {schedule &&
        schedule.map((s) => (
          <div key={s.uid}>
            <h4>{s.day}</h4>
            <div className="list">
              {s.shift.length > 0 &&
                s.shift.map((sh) => (
                  <button type="button" className="btn list-item" key={sh.uid}>
                    {sh.time}
                  </button>
                ))}
            </div>
          </div>
        ))}
      <h3>Upcoming appointments</h3>
      {booked.length > 0 &&
        booked.map((b) => (
          <div key={b.uid}>
            <h2>{b.type}</h2>
            <p>Start count</p>
          </div>
        ))}
    </div>
  );
};

export default AdminDashboard;
