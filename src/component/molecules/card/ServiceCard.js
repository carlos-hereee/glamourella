import Hero from "../../atoms/Hero";

const ServiceCard = ({ data, handleClick }) => {
  return (
    <div className="card">
      <strong className="ribbon">${data.cost}</strong>
      <div className="card-header">
        <Hero data={data} />
      </div>
      <div className="card-body">
        <div>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
        <button
          type="button"
          onClick={() => handleClick(data)}
          className="btn-primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
