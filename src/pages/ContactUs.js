import { useContext } from "react";
import * as yup from "yup";
import Forms from "../component/forms/Forms";
import { CalendarContext } from "../utils/context/CalendarContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const values = { name: "", email: "", message: "" };

const ContactUs = () => {
  const { contactUs } = useContext(CalendarContext);
  return (
    <main className="container">
      <Forms data={{ values, schema, onSubmit: contactUs }} />
    </main>
  );
};

export default ContactUs;
