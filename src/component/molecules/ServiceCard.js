const ServiceCard = ({ data, handleClick }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <div className="ribbon">{data.type}</div>
      <p>{data.description}</p>
      <button
        type="button"
        onClick={() => handleClick(data)}
        className="btn-primary">
        Cost: ${data.cost} for {data.length}
      </button>
    </div>
  );
};

export default ServiceCard;
