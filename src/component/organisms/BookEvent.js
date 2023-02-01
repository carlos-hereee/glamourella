import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { UserContext } from "../../utils/context/UserContext";
import MeetingDetails from "../atoms/MeetingDetails";
import UserCard from "../molecules/card/UserCard";
import Booknow from "../molecules/forms/Booknow";

const BookEvent = () => {
  const { bookNow, meeting, selectedDay } = useContext(CalendarContext);
  const { active } = useContext(ServicesContext);
  const { user, userSchema, userValues } = useContext(UserContext);

  const submit = (e) => bookNow(e, meeting);
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
        <UserCard />
      ) : (
        <Booknow data={{ values: userValues, schema: userSchema }} submit={submit} />
      )}
    </div>
  );
};
export default BookEvent;
