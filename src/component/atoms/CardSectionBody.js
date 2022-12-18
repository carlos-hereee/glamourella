import Hero from "../atoms/Hero";

const CardSectionBody = ({ data }) => {
  return (
    <div className="card-section-body">
      {!data.hero.isEmpty && <Hero data={data.hero} />}
      {data.response && <p>{data.response}</p>}
    </div>
  );
};

export default CardSectionBody;
