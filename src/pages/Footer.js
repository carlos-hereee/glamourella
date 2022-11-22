import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";
import shortid from "shortid";
import ContactUs from "../component/molecules/ContactUs";

const Footer = () => {
  const schedule = [
    { day: "Monday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Tuesday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Wednesday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Thursday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Friday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Saturday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Sunday", hours: "9:30am - 6:30pm", key: shortid.generate() },
  ];
  return (
    <footer>
      <div>
        <Logo />
        <BusinessHours data={schedule} />
      </div>
      <ContactUs />
    </footer>
  );
};

export default Footer;
