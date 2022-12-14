import { useContext } from "react";
import EventCard from "../component/molecules/EventCard";
import FollowUs from "../component/molecules/FollowUs";
import { GlamourellaContext } from "../utils/context/GlamourellaContext";

const About = () => {
  const { about } = useContext(GlamourellaContext);
  return (
    <main className="card-container">
      {about && about.map((a) => <EventCard data={a} key={a.uid} />)}
      <FollowUs />
    </main>
  );
};

export default About;
