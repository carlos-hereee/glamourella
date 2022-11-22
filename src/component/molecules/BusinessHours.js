const BusinessHours = ({ data }) => {
  console.log("data", data);
  return (
    <table className="responsive-table">
      <thead>
        <tr className="table-header">
          {data.map((h) => (
            <th key={h.key} className="right-header">
              {h.day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((b) => (
          <tr className="responsive-table-item" key={b.key}>
            <th className="left-header">{b.day}</th>
            <td className="responsive-table-cell">
              {b.open} - {b.close}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Monday: Closed Tuesday: 9:30 am - 6:30 pm Wednesday: 9:30 am - 6:30 pm
// Thursday: 9:30 am - 6:30 pm Friday: 9:30 am - 6:30 pm Saturday: 9:00 am -
// 5:30 pm Sunday: Closed

export default BusinessHours;
