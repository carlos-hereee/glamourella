import Hero from "../atoms/Hero";

const CardHeader = ({ data }) => {
  return (
    <div className="card-header">
      {!data.hero.isEmpty && <Hero data={data.hero} />}
      <h2 className="title">{data.title}</h2>
      {data.description && <p>{data.description}</p>}
    </div>
  );
};

export default CardHeader;
