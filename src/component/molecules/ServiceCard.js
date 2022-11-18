const ServiceCard = ({ data, handleClick }) => {
  return (
    <div className="card">
      <h4>
        {data.name} {data.type}
      </h4>
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
