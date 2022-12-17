const Hero = ({ data }) => {
  return <img className="hero" src={data.src} alt={data.alt} />;
};

export default Hero;
