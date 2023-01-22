import Forms from "../organisms/Forms";
import * as yup from "yup";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { UserContext } from "../../utils/context/UserContext";
import MeetingDetails from "../atoms/MeetingDetails";
import ButtonLink from "../atoms/buttons/ButtonLink";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  recaptcha: yup.string().required("*Required field").nullable(),
  phone: yup.number().required("*Required field"),
});
const values = { name: "", email: "", phone: "" };
const BookEvent = () => {
  const { bookNow, meeting, selectedDay, booked, cart } =
    useContext(CalendarContext);
  const { active } = useContext(ServicesContext);
  const { user } = useContext(UserContext);
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
      {/* {cart.length === 0 && booked && <ButtonLink link="checkout" />} */}
      {user.uid ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <>
          <p>Please fill out information bellow</p>
          <Forms data={{ values, schema }} submit={(e) => bookNow(e, meeting)} />
        </>
      )}
    </div>
  );
};
export default BookEvent;
