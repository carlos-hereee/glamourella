import ContactUs from "../component/molecules/ContactUs";
import About from "./About";
import Booking from "./Booking";
import Gallery from "./Gallery";
import Services from "./Services";

const Landing = () => {
  return (
    <>
      <About />
      <Booking />
      <Services />
      <Gallery />
      <ContactUs />
    </>
  );
};

export default Landing;
