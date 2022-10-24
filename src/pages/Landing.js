import About from "./About";
import Services from "./Services";

const Landing = () => {
  return (
    <section className="container">
      <About />
      <Services />
      <button type="button" className="btn">
        Book now!
      </button>
      <button type="button" className="btn">
        Call Now
      </button>
    </section>
  );
};

export default Landing;
