import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";
import ContactUs from "../component/molecules/ContactUs";
import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";

const Footer = () => {
  const { schedule } = useContext(AppContext);
  return (
    <footer>
      <section className="card">
        <Logo />
        <BusinessHours data={schedule} />
      </section>
      <ContactUs />
    </footer>
  );
};

export default Footer;
