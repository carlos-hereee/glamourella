const Hero = ({ data }) => {
  return (
    <img
      className="hero"
      src={data.src}
      alt={data.alt}
      crossOrigin="anonymous"
    />
  );
};

export default Hero;
