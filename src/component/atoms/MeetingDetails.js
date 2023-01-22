const MeetingDetails = ({ meeting }) => (
  <p>
    Appointment set for{" "}
    <strong>
      {meeting.date} @ {meeting.time.startTime} - {meeting.time.endTime}
    </strong>
  </p>
);
export default MeetingDetails;
