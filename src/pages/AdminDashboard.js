import { useContext } from "react";
import CustomLink from "../component/atoms/CustomLink";
import { UserContext } from "../utils/context/UserContext";

const AdminDashboard = () => {
  // TODO: ADMIN ADD THEIR WORK SCHEDULE
  // TODO:
  const { user, booked } = useContext(UserContext);
  const schedule = [
    {
      day: "monday",
      shift: [
        { time: "9am - 10am", isOpen: true },
        { time: "11am-12pm", isOpen: true },
        { time: "2pm-3pm", isOpen: true },
        { time: "4pm-5pm", isOpen: true },
      ],
    },
    {
      day: "tuesday",
      shift: [
        { time: "9am - 10am", isOpen: true },
        { time: "11am-12pm", isOpen: true },
        { time: "2pm-3pm", isOpen: true },
        { time: "4pm-5pm", isOpen: true },
      ],
    },
    {
      day: "wednesday",
      shift: [
        { time: "9am - 10am", isOpen: true },
        { time: "11am-12pm", isOpen: true },
        { time: "2pm-3pm", isOpen: true },
        { time: "4pm-5pm", isOpen: true },
      ],
    },
    {
      day: "friday",
      shift: [
        { time: "9am - 10am", isOpen: true },
        { time: "11am-12pm", isOpen: true },
        { time: "2pm-3pm", isOpen: true },
        { time: "4pm-5pm", isOpen: true },
      ],
    },
    {
      day: "saturday",
      shift: [
        { time: "9am - 10am", isOpen: true },
        { time: "11am-12pm", isOpen: true },
        { time: "2pm-3pm", isOpen: true },
        { time: "4pm-5pm", isOpen: true },
      ],
    },
    {
      day: "sunday",
      shift: [
        { time: "9am - 10am", isOpen: true },
        { time: "11am-12pm", isOpen: true },
        { time: "2pm-3pm", isOpen: true },
        { time: "4pm-5pm", isOpen: true },
      ],
    },
  ];

  return (
    <div className="card-container">
      <h3>My schedule</h3>
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
