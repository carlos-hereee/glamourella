const ServiceCard = ({ data, handleClick }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <div className="ribbon">{data.type}</div>
      <p>{data.description}</p>
      <p>
        Cost: ${data.cost} for {data.length}
      </p>
      <button
        type="button"
        onClick={() => handleClick(data)}
        className="btn-primary">
        Add To Cart
      </button>
    </div>
  );
};

export default ServiceCard;
