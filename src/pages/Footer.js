import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";
import FollowUs from "../component/molecules/FollowUs";
import shortid from "shortid";
import ContactUs from "../component/molecules/ContactUs";

const Footer = () => {
  const socials = [
    {
      social: "instagram",
      link: "https://www.instagram.com/glamourrella/",
      key: shortid.generate(),
    },
  ];
  const schedule = [
    { day: "Monday", open: "9:30am", close: "6:30pm", key: shortid.generate() },
    {
      day: "Tuesday",
      open: "9:30am",
      close: "6:30pm",
      key: shortid.generate(),
    },
    {
      day: "Wednesday",
      open: "9:30am",
      close: "6:30pm",
      key: shortid.generate(),
    },
    {
      day: "Thursday",
      open: "9:30am",
      close: "6:30pm",
      key: shortid.generate(),
    },
    {
      day: "Friday",
      open: "9:30am",
      close: "6:30pm",
      key: shortid.generate(),
    },
    {
      day: "Saturday",
      open: "9:30am",
      close: "6:30pm",
      key: shortid.generate(),
    },
    {
      day: "Sunday",
      open: "9:30am",
      close: "6:30pm",
      key: shortid.generate(),
    },
  ];
  return (
    <footer>
      <Logo />
      <BusinessHours data={schedule} />
      <ContactUs />
      <FollowUs socials={socials} />
    </footer>
  );
};

export default Footer;
