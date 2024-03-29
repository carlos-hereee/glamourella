import { useContext } from "react";
import FollowUs from "../component/molecules/FollowUs";
import { AppContext } from "../utils/context/AppContext";
import CardHeader from "../component/molecules/card/CardHeader";
import CardSection from "../component/organisms/CardSection";

const About = () => {
  const { about } = useContext(AppContext);

  // return <Container data={about} />;
  return (
    <section className="secondary-container">
      <CardHeader data={about} />
      <div className="card-body">
        {about.sections.map((section) => (
          <CardSection data={section} key={section.uid} />
        ))}
      </div>
      <FollowUs />
    </section>
  );
};

export default About;
