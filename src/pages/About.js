import { useContext } from "react";
import shortid from "shortid";
import EventCard from "../component/molecules/EventCard";
import FollowUs from "../component/molecules/FollowUs";
import ReadMore from "../component/molecules/ReadMore";

let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde
      iste tempore iure! Debitis magnam, voluptate autem iusto error fuga odio
      soluta doloremque. Dolorum, voluptates! A culpa neque non dolores! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla voluptatem
      numquam, eum tempore sit quod ut nesciunt. Iste deleniti officia
      blanditiis! Commodi doloremque explicabo illo earum dolorum magni nisi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quas
      hic, facilis quaerat quos velit alias doloribus nisi tempora?`;

const About = () => {
  // const
  const about = [
    {
      title: "Why choose Glamourella?",
      description: lorem,
      uid: shortid.generate(),
      lines: 5,
    },
    {
      title: "My Story",
      description: lorem,
      uid: shortid.generate(),
      lines: 4,
    },
    {
      title: "Who am I?",
      description: lorem,
      uid: shortid.generate(),
      lines: 3,
    },
  ];
  return (
    <main className="container">
      <div className="card-container">
        {about && about.map((a) => <EventCard data={a} />)}
        <FollowUs />
      </div>
    </main>
  );
};

export default About;
