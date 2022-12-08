import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";
import shortid from "shortid";
import ContactUs from "../component/molecules/ContactUs";
import { useContext } from "react";
import { GlamourellaContext } from "../utils/context/GlamourellaContext";

const Footer = () => {
  const { schedule } = useContext(GlamourellaContext);
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
