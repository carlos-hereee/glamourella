import { useContext } from "react";
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
  return (
    <main className="container">
      <div className="card">
        <h3>Why choose Glamourella?</h3>
        <ReadMore data={lorem} lines={5} />
        <h3>My story!</h3>
        <ReadMore data={lorem} lines={4} />
        <h3>Who am I?</h3>
        <ReadMore data={lorem} lines={3} />
        <FollowUs />
      </div>
    </main>
  );
};

export default About;
