import { useContext } from "react";
import ContactUs from "../component/molecules/ContactUs";
import AppCalendar from "../component/organisms/AppCalendar";
import { CalendarContext } from "../utils/context/CalendarContext";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";

const Landing = () => {
  const { events } = useContext(CalendarContext);
  return (
    <>
      <Services />
      <AppCalendar data={events.sections} />
      <Gallery />
      <About />
      <ContactUs />
    </>
  );
};

export default Landing;
