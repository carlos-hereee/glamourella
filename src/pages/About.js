import { useContext } from "react";
import EventCard from "../component/molecules/card/EventCard";
import FollowUs from "../component/molecules/FollowUs";
import { GlamourellaContext } from "../utils/context/GlamourellaContext";

const About = () => {
  const { about } = useContext(GlamourellaContext);
  return (
    <section className="card">
      {about && about.map((a) => <EventCard data={a} key={a.uid} />)}
      <FollowUs />
    </section>
  );
};

export default About;
