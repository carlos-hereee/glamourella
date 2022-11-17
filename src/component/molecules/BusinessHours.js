const BusinessHours = ({ heading, body }) => {
  return (
    <table>
      <thead>
        <tr>
          {heading.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {body.map((b) => (
            <td key={b.key}>
              {b.open} - {b.close}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

// Monday: Closed Tuesday: 9:30 am - 6:30 pm Wednesday: 9:30 am - 6:30 pm
// Thursday: 9:30 am - 6:30 pm Friday: 9:30 am - 6:30 pm Saturday: 9:00 am -
// 5:30 pm Sunday: Closed

export default BusinessHours;
