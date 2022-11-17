import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <BusinessHours />
      <div>
        <h4>Contact Us</h4>
      </div>
      <div>
        <h4>Follow Us </h4>
      </div>
    </footer>
  );
};

export default Footer;
