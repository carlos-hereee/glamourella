import { useContext } from "react";
import FollowUs from "../component/molecules/FollowUs";
import { AppContext } from "../utils/context/AppContext";
import CardHeader from "../component/molecules/card/CardHeader";
const About = () => {
  const { about } = useContext(AppContext);
  console.log("about", about);
  return (
    <section className="card">
      <CardHeader data={about} />
      {/* {about && about.map((a) => <EventCard data={a} key={a.uid} />)} */}
      <FollowUs />
    </section>
  );
};

export default About;
