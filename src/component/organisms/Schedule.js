import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import Buttons from "../molecules/Buttons";
import CardHeader from "../molecules/card/CardHeader";

const Schedule = () => {
  const { schedule, filter } = useContext(AdminContext);
  console.log("schedule", schedule);
  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(schedule.planner, content);
  };
  return (
    <section className="primary-container">
      <CardHeader data={schedule} />
      {schedule.isNav && (
        <nav className="navbar">
          {schedule.nav.map((g) => (
            <Buttons name={g} handleClick={handleClick} key={g} />
          ))}
        </nav>
      )}

      <div className="card-container">
        {schedule.planner.map((s) => (
          <div className="admin-content" key={s.uid}>
            <p>
              <strong>{s.day}</strong>
            </p>
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
      </div>
    </section>
  );
};
export default Schedule;
