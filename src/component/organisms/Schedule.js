import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";

const Schedule = () => {
  const { schedule } = useContext(AdminContext);

  return (
    <div className="primary-container">
      <h3 className="title">My schedule</h3>
      {schedule.map((s) => (
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
  );
};
export default Schedule;
