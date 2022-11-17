import shortid from "shortid";

const BusinessHours = () => {
  const heading = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const schedule = [
    { open: "9:30am", close: "6:30pm", key: shortid.generate() },
    { open: "9:30am", close: "6:30pm", key: shortid.generate() },
    { open: "9:30am", close: "6:30pm", key: shortid.generate() },
    { open: "9:30am", close: "6:30pm", key: shortid.generate() },
    { open: "9:30am", close: "6:30pm", key: shortid.generate() },
    { open: "9:30am", close: "6:30pm", key: shortid.generate() },
    { open: "9:30am", close: "6:30pm", key: shortid.generate() },
  ];
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
          {schedule.map((s) => (
            <td key={s.key}>
              {s.open} - {s.close}
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
