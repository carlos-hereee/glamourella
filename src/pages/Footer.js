import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";
// import ContactUs from "../component/molecules/ContactUs";
import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import Newsletter from "../component/molecules/Newsletter";

const Footer = () => {
  const { schedule } = useContext(AppContext);
  return (
    <footer>
      {/* <section className="card"> */}
      <Logo />
      <Newsletter />
      <BusinessHours data={schedule} />
      {/* </section> */}
    </footer>
  );
};

export default Footer;
