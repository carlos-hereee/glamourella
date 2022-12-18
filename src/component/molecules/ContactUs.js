import { useContext } from "react";
import * as yup from "yup";
import Forms from "../organisms/Forms";
import { CalendarContext } from "../../utils/context/CalendarContext";
import FollowUs from "./FollowUs";
import { AppContext } from "../../utils/context/AppContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const values = { name: "", email: "", message: "" };
const ContactUs = () => {
  const { contactUs } = useContext(CalendarContext);
  const { socials } = useContext(AppContext);
  // const socials = ;
  return (
    <section className="card">
      <h3>Contact Us</h3>
      <Forms data={{ values, schema, onSubmit: contactUs }} />
      <FollowUs socials={socials} />
    </section>
  );
};

export default ContactUs;
