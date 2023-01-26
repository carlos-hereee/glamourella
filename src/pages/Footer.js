import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";
import Newsletter from "../component/molecules/Newsletter";
// import ContactUs from "../component/molecules/ContactUs";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <Newsletter />
      <BusinessHours />
    </footer>
  );
};

export default Footer;
