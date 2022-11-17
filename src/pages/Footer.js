import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";
import FollowUs from "../component/molecules/FollowUs";
import shortid from "shortid";
import ContactUs from "./ContactUs";

const Footer = () => {
  const socials = [
    {
      social: "instagram",
      link: "https://www.instagram.com/glamourrella/",
      key: shortid.generate(),
    },
  ];
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
    <footer>
      <Logo />
      <BusinessHours heading={heading} body={schedule} />
      <ContactUs />
      <FollowUs socials={socials} />
    </footer>
  );
};

export default Footer;
