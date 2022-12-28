import { useContext } from "react";
import { AdminContext } from "../../utils/context/AdminContext";
import AdminContainer from "../../component/template/SecondaryContainer";

const Schedule = () => {
  const { schedule, filter, isFiltered, planner } = useContext(AdminContext);
  // console.log("schedule", schedule);
  // const handleClick = (e) => {
  //   let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
  //   filter(schedule.planner, content);
  // };
  return (
    <AdminContainer
      data={schedule}
      filtered={planner}
      filter={filter}
      isFiltered={isFiltered}
    />
  );
};
export default Schedule;

/**
 *  <section className="primary-container">
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
 */
