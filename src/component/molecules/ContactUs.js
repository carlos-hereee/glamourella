import { useContext } from "react";
import * as yup from "yup";
import Forms from "../forms/Forms";
import { CalendarContext } from "../../utils/context/CalendarContext";
import FollowUs from "./FollowUs";
import shortid from "shortid";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const values = { name: "", email: "", message: "" };
const ContactUs = () => {
  const { contactUs } = useContext(CalendarContext);
  const socials = [
    {
      social: "instagram",
      link: "https://www.instagram.com/glamourrella/",
      key: shortid.generate(),
    },
  ];
  return (
    <section className="card">
      <h2>Contact Us</h2>
      <Forms data={{ values, schema, onSubmit: contactUs }} />
      <FollowUs socials={socials} />
    </section>
  );
};

export default ContactUs;
