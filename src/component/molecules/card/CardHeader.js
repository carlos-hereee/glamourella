import Hero from "../atoms/Hero";

const CardHeader = ({ data }) => {
  return (
    <div className="card-header">
      {!data.hero.isEmpty && <Hero data={data.hero} />}
      {data.title && <h3 className="title">{data.title}</h3>}
      {data.description && <p>{data.description}</p>}
    </div>
  );
};

export default CardHeader;
