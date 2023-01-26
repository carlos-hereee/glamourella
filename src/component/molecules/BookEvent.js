import Forms from "../organisms/Forms";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { UserContext } from "../../utils/context/UserContext";
import MeetingDetails from "../atoms/MeetingDetails";

const BookEvent = () => {
  const { bookNow, meeting, selectedDay } = useContext(CalendarContext);
  const { active } = useContext(ServicesContext);
  const { user, userSchema, userValues } = useContext(UserContext);
  return (
    <div className="book-event">
      <h3>
        Booking:{" "}
        <strong>
          {active.title} {active.subtitle}
        </strong>
      </h3>
      {selectedDay.hasList &&
        selectedDay.list.filter((l) => l.uid !== meeting.uid).length > 0 && (
          <p className="warning">
            A new date was selected, your previous appointment has been saved in
            memory so if you cannot find a new time you can continue below
          </p>
        )}
      <MeetingDetails meeting={meeting} />
      {user.uid ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <>
          <p>Please fill out information bellow</p>
          <Forms
            data={{ values: userValues, schema: userSchema }}
            submit={(e) => bookNow(e, meeting)}
          />
        </>
      )}
    </div>
  );
};
export default BookEvent;
